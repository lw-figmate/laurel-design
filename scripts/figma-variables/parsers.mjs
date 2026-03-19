/**
 * Shared parsers and generators for converting between CSS custom properties
 * and Figma variable representations.
 *
 * Handles the naming convention mapping:
 *   CSS: --laurel-color-primary-500
 *   Figma: Primitives / Primary/500
 *
 * And value conversions:
 *   CSS hex #faa41a ↔ Figma RGBA { r: 0.98, g: 0.643, b: 0.102, a: 1 }
 *   CSS 0.5rem ↔ Figma float 8
 *   CSS var(--laurel-color-primary-600) ↔ Figma variable alias
 */

import { readFileSync } from 'fs';
import { join } from 'path';

const TOKENS_DIR = join(import.meta.dirname, '..', '..', 'src', 'tokens');

// ── CSS → Figma name mapping ────────────────────────────────────────

/**
 * Maps between CSS token files and Figma collection names.
 * Order matters for generation — primitives first so semantic can alias them.
 */
export const COLLECTION_MAP = [
  { css: 'colors.css',     collection: 'Primitives',  type: 'COLOR' },
  { css: 'spacing.css',    collection: 'Spacing',     type: 'FLOAT' },
  { css: 'typography.css', collection: 'Typography',  type: 'FLOAT' },
  { css: 'shapes.css',     collection: 'Shapes',      type: 'FLOAT' },
  { css: 'motion.css',     collection: 'Motion',      type: 'FLOAT' },
  { css: 'semantic.css',   collection: 'Semantic',    type: 'COLOR' },
];

// Figma variable names use / as a group separator
// CSS vars use - as separator with --laurel- prefix

/**
 * Convert a CSS custom property name to a Figma variable name.
 *
 * --laurel-color-primary-500  → Primary/500
 * --laurel-space-4            → Spacing/4
 * --laurel-radius-lg          → Radius/lg
 * --laurel-font-size-sm       → FontSize/sm
 * --laurel-bg-surface         → Background/surface
 */
export function cssVarToFigmaName(cssVar, collectionName) {
  // Strip --laurel- prefix
  let name = cssVar.replace(/^--laurel-/, '');

  switch (collectionName) {
    case 'Primitives':
      // --laurel-color-primary-500 → Primary/500
      name = name.replace(/^color-/, '');
      return groupFromPrefix(name);

    case 'Spacing':
      // --laurel-space-4 → Spacing/4
      name = name.replace(/^space-/, '');
      return name.replace(/-/g, '.');   // space-0-5 → 0.5

    case 'Typography': {
      // --laurel-font-size-sm → FontSize/sm
      // --laurel-font-weight-bold → FontWeight/bold
      // --laurel-line-height-normal → LineHeight/normal
      // --laurel-font-sans → FontFamily/sans
      if (name.startsWith('font-size-')) return `FontSize/${name.replace('font-size-', '')}`;
      if (name.startsWith('font-weight-')) return `FontWeight/${name.replace('font-weight-', '')}`;
      if (name.startsWith('line-height-')) return `LineHeight/${name.replace('line-height-', '')}`;
      if (name.startsWith('font-')) return `FontFamily/${name.replace('font-', '')}`;
      return name;
    }

    case 'Shapes': {
      // --laurel-radius-lg → Radius/lg
      // --laurel-border-width-thin → BorderWidth/thin
      // --laurel-shadow-sm → Shadow/sm
      if (name.startsWith('radius-')) return `Radius/${name.replace('radius-', '')}`;
      if (name.startsWith('border-width-')) return `BorderWidth/${name.replace('border-width-', '')}`;
      if (name.startsWith('shadow-')) return `Shadow/${name.replace('shadow-', '')}`;
      return name;
    }

    case 'Motion': {
      // --laurel-duration-fast → Duration/fast
      // --laurel-ease-default → Easing/default
      if (name.startsWith('duration-')) return `Duration/${name.replace('duration-', '')}`;
      if (name.startsWith('ease-')) return `Easing/${name.replace('ease-', '')}`;
      return name;
    }

    case 'Semantic':
      // --laurel-bg-surface → Background/surface
      // --laurel-text-primary → Text/primary
      // --laurel-status-info-bg → Status/info-bg
      return groupFromPrefix(name);

    default:
      return name;
  }
}

/**
 * Convert a Figma variable name back to a CSS custom property name.
 */
export function figmaNameToCssVar(figmaName, collectionName) {
  const parts = figmaName.split('/');
  const group = parts[0];
  const leaf = parts.slice(1).join('/');

  switch (collectionName) {
    case 'Primitives':
      return `--laurel-color-${group.toLowerCase()}-${leaf}`;

    case 'Spacing':
      // Spacing names have no group prefix (e.g. "4", "0.5"), so use full name
      return `--laurel-space-${figmaName.replace(/\./g, '-')}`;

    case 'Typography': {
      const map = { FontSize: 'font-size', FontWeight: 'font-weight', LineHeight: 'line-height', FontFamily: 'font' };
      const prefix = map[group] || group.toLowerCase();
      return `--laurel-${prefix}-${leaf}`;
    }

    case 'Shapes': {
      const map = { Radius: 'radius', BorderWidth: 'border-width', Shadow: 'shadow' };
      const prefix = map[group] || group.toLowerCase();
      return `--laurel-${prefix}-${leaf}`;
    }

    case 'Motion': {
      const map = { Duration: 'duration', Easing: 'ease' };
      const prefix = map[group] || group.toLowerCase();
      return `--laurel-${prefix}-${leaf}`;
    }

    case 'Semantic': {
      const map = {
        Background: 'bg', Text: 'text', Border: 'border', Ring: 'ring',
        Icon: 'icon', Status: 'status',
      };
      const prefix = map[group] || group.toLowerCase();
      return `--laurel-${prefix}-${leaf}`;
    }

    default:
      return `--laurel-${figmaName.replace(/\//g, '-').toLowerCase()}`;
  }
}

function groupFromPrefix(name) {
  // Split at the LAST dash that separates the group from the leaf
  // For semantic: bg-surface → Background/surface, text-on-brand → Text/on-brand
  // For primitives: primary-500 → Primary/500, neutral-0 → Neutral/0
  const semanticPrefixes = {
    bg: 'Background', text: 'Text', border: 'Border', ring: 'Ring',
    icon: 'Icon', status: 'Status',
  };

  for (const [prefix, group] of Object.entries(semanticPrefixes)) {
    if (name.startsWith(`${prefix}-`)) {
      return `${group}/${name.slice(prefix.length + 1)}`;
    }
  }

  // For primitives: capitalize first segment
  const dashIdx = name.indexOf('-');
  if (dashIdx === -1) return name;
  const group = name.slice(0, dashIdx);
  const leaf = name.slice(dashIdx + 1);
  return `${group.charAt(0).toUpperCase() + group.slice(1)}/${leaf}`;
}

// ── Value conversions ───────────────────────────────────────────────

/**
 * Convert a CSS color value (#hex or rgb()) to Figma RGBA (0–1 floats).
 */
export function cssColorToFigma(cssValue) {
  const hex = cssValue.trim();

  // Handle rgb(R G B / A) and rgba(R, G, B, A)
  const rgbMatch = hex.match(/^rgba?\(\s*([\d.]+)\s*[\s,]\s*([\d.]+)\s*[\s,]\s*([\d.]+)\s*(?:[/,]\s*([\d.]+%?))?\s*\)$/);
  if (rgbMatch) {
    let a = 1;
    if (rgbMatch[4] !== undefined) {
      a = rgbMatch[4].endsWith('%') ? parseFloat(rgbMatch[4]) / 100 : parseFloat(rgbMatch[4]);
    }
    return {
      r: parseFloat(rgbMatch[1]) / 255,
      g: parseFloat(rgbMatch[2]) / 255,
      b: parseFloat(rgbMatch[3]) / 255,
      a,
    };
  }

  // Handle #hex
  let r, g, b, a = 1;
  if (hex.length === 4) {
    // #RGB
    r = parseInt(hex[1] + hex[1], 16) / 255;
    g = parseInt(hex[2] + hex[2], 16) / 255;
    b = parseInt(hex[3] + hex[3], 16) / 255;
  } else if (hex.length === 7) {
    // #RRGGBB
    r = parseInt(hex.slice(1, 3), 16) / 255;
    g = parseInt(hex.slice(3, 5), 16) / 255;
    b = parseInt(hex.slice(5, 7), 16) / 255;
  } else if (hex.length === 9) {
    // #RRGGBBAA
    r = parseInt(hex.slice(1, 3), 16) / 255;
    g = parseInt(hex.slice(3, 5), 16) / 255;
    b = parseInt(hex.slice(5, 7), 16) / 255;
    a = parseInt(hex.slice(7, 9), 16) / 255;
  } else {
    return null; // Can't parse
  }

  return { r, g, b, a };
}

/**
 * Convert Figma RGBA {r, g, b, a} (0–1 floats) to CSS #hex.
 */
export function figmaColorToCss(rgba) {
  const toHex = (v) => Math.round(v * 255).toString(16).padStart(2, '0');
  const hex = `#${toHex(rgba.r)}${toHex(rgba.g)}${toHex(rgba.b)}`;
  if (rgba.a !== undefined && rgba.a < 1) {
    return `${hex}${toHex(rgba.a)}`;
  }
  return hex;
}

/**
 * Convert a CSS numeric value (rem, px, ms, plain number) to a Figma float.
 * rem values are converted to px (1rem = 16px).
 */
export function cssNumericToFigma(cssValue) {
  const str = String(cssValue).trim();
  if (str === '0') return 0;

  const remMatch = str.match(/^([\d.]+)rem$/);
  if (remMatch) return parseFloat(remMatch[1]) * 16;

  const pxMatch = str.match(/^([\d.]+)px$/);
  if (pxMatch) return parseFloat(pxMatch[1]);

  const msMatch = str.match(/^([\d.]+)ms$/);
  if (msMatch) return parseFloat(msMatch[1]);

  const num = parseFloat(str);
  return isNaN(num) ? null : num;
}

/**
 * Convert a Figma float back to the appropriate CSS unit.
 */
export function figmaFloatToCss(value, collectionName, groupName) {
  if (value === 0) return '0';

  switch (collectionName) {
    case 'Spacing':
      // Spacing uses rem (value is in px)
      return `${value / 16}rem`;

    case 'Typography':
      if (groupName === 'FontSize') return `${value / 16}rem`;
      if (groupName === 'FontWeight') return String(value);
      if (groupName === 'LineHeight') return String(value);
      return String(value);

    case 'Shapes':
      if (groupName === 'Radius') {
        if (value >= 9999) return '9999px';
        return value < 16 ? `${value / 16}rem` : `${value / 16}rem`;
      }
      if (groupName === 'BorderWidth') return `${value}px`;
      return String(value);

    case 'Motion':
      if (groupName === 'Duration') return `${value}ms`;
      return String(value);

    default:
      return String(value);
  }
}

// ── CSS file parsing ────────────────────────────────────────────────

/**
 * Parse a CSS token file and extract all custom property declarations.
 * Returns an array of { name, value, selector } objects.
 */
export function parseCssTokenFile(filename) {
  const filePath = join(TOKENS_DIR, filename);
  const content = readFileSync(filePath, 'utf-8');
  return parseCssString(content);
}

export function parseCssString(content) {
  const results = [];
  let currentSelector = ':root';

  for (const line of content.split('\n')) {
    const trimmed = line.trim();

    // Track selector changes
    const selectorMatch = trimmed.match(/^([^{]+)\s*\{/);
    if (selectorMatch) {
      currentSelector = selectorMatch[1].trim();
      continue;
    }

    // Match CSS custom property declarations
    const propMatch = trimmed.match(/^(--[\w-]+)\s*:\s*(.+?)\s*;/);
    if (propMatch) {
      results.push({
        name: propMatch[1],
        value: propMatch[2],
        selector: currentSelector,
      });
    }

    if (trimmed === '}') {
      currentSelector = ':root'; // Reset after block close
    }
  }

  return results;
}

/**
 * Check if a CSS value is a var() reference and extract the variable name.
 */
export function parseVarReference(value) {
  const match = value.match(/^var\((--[\w-]+)\)$/);
  return match ? match[1] : null;
}

/**
 * Determine which Figma collection a CSS variable belongs to based on its prefix.
 */
export function detectCollection(cssVarName) {
  const name = cssVarName.replace(/^--laurel-/, '');
  if (name.startsWith('color-')) return 'Primitives';
  if (name.startsWith('space-')) return 'Spacing';
  if (name.startsWith('font-') || name.startsWith('line-height-')) return 'Typography';
  if (name.startsWith('radius-') || name.startsWith('border-width-') || name.startsWith('shadow-')) return 'Shapes';
  if (name.startsWith('duration-') || name.startsWith('ease-')) return 'Motion';
  // Semantic tokens (bg-, text-, border-, ring-, icon-, status-)
  if (/^(bg|text|border|ring|icon|status)-/.test(name)) return 'Semantic';
  return null;
}

export { TOKENS_DIR };
