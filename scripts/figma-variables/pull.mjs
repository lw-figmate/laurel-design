/**
 * Pull: Figma Variables → CSS token files
 *
 * Fetches all local variables from the Figma file and regenerates
 * the CSS token files under src/tokens/.
 *
 * Usage: node scripts/figma-variables/pull.mjs [--dry-run]
 */

import { writeFileSync } from 'fs';
import { join } from 'path';
import { fetchStructured } from './client.mjs';
import {
  figmaNameToCssVar,
  figmaColorToCss,
  figmaFloatToCss,
  COLLECTION_MAP,
  TOKENS_DIR,
} from './parsers.mjs';

export async function pull({ dryRun = false } = {}) {
  console.log('⬇  Fetching variables from Figma…');
  const { collectionsByName, variablesByCollection, collectionsById, variablesById } =
    await fetchStructured();

  console.log(
    `   Found ${variablesById.size} variables across ${collectionsByName.size} collections`
  );

  const filesWritten = [];

  for (const { css, collection, type } of COLLECTION_MAP) {
    const col = collectionsByName.get(collection);
    if (!col) {
      console.log(`   ⏭  Skipping "${collection}" — not found in Figma`);
      continue;
    }

    const vars = variablesByCollection.get(collection) || [];
    if (vars.length === 0) continue;

    const modes = col.modes; // [{ modeId, name }, ...]
    const isMultiMode = modes.length > 1;

    let output;
    if (collection === 'Semantic' && isMultiMode) {
      output = generateSemanticCss(vars, modes, col, variablesById, collectionsById, collection);
    } else {
      output = generateSingleModeCss(vars, modes[0], col, variablesById, collectionsById, collection, type);
    }

    const filePath = join(TOKENS_DIR, css);
    if (dryRun) {
      console.log(`   [dry-run] Would write ${css} (${vars.length} variables)`);
    } else {
      writeFileSync(filePath, output, 'utf-8');
      console.log(`   ✓ Wrote ${css} (${vars.length} variables)`);
    }
    filesWritten.push(css);
  }

  console.log(`\n✅ Pull complete — ${filesWritten.length} files ${dryRun ? 'would be ' : ''}updated`);
  return filesWritten;
}

// ── CSS generators ──────────────────────────────────────────────────

function resolveValue(value, variablesById, collectionsById, collectionName, type) {
  // Alias reference
  if (value && typeof value === 'object' && value.type === 'VARIABLE_ALIAS') {
    const target = variablesById.get(value.id);
    if (target) {
      const targetCol = collectionsById.get(target.variableCollectionId);
      const targetCssVar = figmaNameToCssVar(target.name, targetCol?.name || collectionName);
      return `var(${targetCssVar})`;
    }
    return null;
  }

  // Direct color value
  if (type === 'COLOR' && value && typeof value === 'object' && 'r' in value) {
    return figmaColorToCss(value);
  }

  // Direct float value
  if (typeof value === 'number') {
    const group = ''; // Will be determined by caller
    return String(value);
  }

  return value != null ? String(value) : null;
}

function resolveFloatWithUnit(value, variablesById, collectionsById, collectionName, figmaName) {
  if (value && typeof value === 'object' && value.type === 'VARIABLE_ALIAS') {
    const target = variablesById.get(value.id);
    if (target) {
      const targetCol = collectionsById.get(target.variableCollectionId);
      const targetCssVar = figmaNameToCssVar(target.name, targetCol?.name || collectionName);
      return `var(${targetCssVar})`;
    }
    return null;
  }

  if (typeof value === 'number') {
    const group = figmaName.split('/')[0];
    return figmaFloatToCss(value, collectionName, group);
  }

  return value != null ? String(value) : null;
}

function generateSingleModeCss(vars, mode, col, variablesById, collectionsById, collectionName, type) {
  const header = getCssHeader(collectionName);
  const groups = groupVariables(vars);

  let css = header + ':root {\n';

  for (const [groupName, groupVars] of groups) {
    css += `  /* ${groupName} */\n`;
    for (const v of groupVars) {
      const value = v.valuesByMode[mode.modeId];
      const cssVar = figmaNameToCssVar(v.name, collectionName);
      let cssValue;

      if (type === 'COLOR') {
        cssValue = resolveValue(value, variablesById, collectionsById, collectionName, type);
      } else {
        cssValue = resolveFloatWithUnit(value, variablesById, collectionsById, collectionName, v.name);
      }

      if (cssValue != null) {
        css += `  ${cssVar}: ${cssValue};\n`;
      }
    }
    css += '\n';
  }

  css = css.trimEnd() + '\n}\n';
  return css;
}

function generateSemanticCss(vars, modes, col, variablesById, collectionsById, collectionName) {
  const header = getCssHeader(collectionName);
  const lightMode = modes.find((m) => /light/i.test(m.name)) || modes[0];
  const darkMode = modes.find((m) => /dark/i.test(m.name)) || modes[1];

  const groups = groupVariables(vars);

  // Light mode (:root)
  let css = header + ':root {\n';
  for (const [groupName, groupVars] of groups) {
    css += `  /* ── ${groupName} ───────────────────────────────────────────────── */\n`;
    for (const v of groupVars) {
      const value = v.valuesByMode[lightMode.modeId];
      const cssVar = figmaNameToCssVar(v.name, collectionName);
      const cssValue = resolveValue(value, variablesById, collectionsById, collectionName, 'COLOR');
      if (cssValue != null) {
        css += `  ${cssVar}: ${cssValue};\n`;
      }
    }
    css += '\n';
  }
  css = css.trimEnd() + '\n}\n';

  // Dark mode
  if (darkMode && darkMode.modeId !== lightMode.modeId) {
    css += '\n/* ── Dark theme ─────────────────────────────────────────────────── */\n\n';
    css += '[data-theme="dark"] {\n';
    for (const [groupName, groupVars] of groups) {
      css += `  /* ── ${groupName} ───────────────────────────────────────────────── */\n`;
      for (const v of groupVars) {
        const value = v.valuesByMode[darkMode.modeId];
        const cssVar = figmaNameToCssVar(v.name, collectionName);
        const cssValue = resolveValue(value, variablesById, collectionsById, collectionName, 'COLOR');
        if (cssValue != null) {
          css += `  ${cssVar}: ${cssValue};\n`;
        }
      }
      css += '\n';
    }
    css = css.trimEnd() + '\n}\n';
  }

  return css;
}

function groupVariables(vars) {
  const groups = new Map();
  for (const v of vars) {
    const group = v.name.split('/')[0];
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push(v);
  }
  // Sort variables within each group by name
  for (const [, groupVars] of groups) {
    groupVars.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
  }
  return groups;
}

function getCssHeader(collectionName) {
  const nameMap = {
    Primitives: 'Color Tokens (Primitives)',
    Spacing: 'Spacing Tokens',
    Typography: 'Typography Tokens',
    Shapes: 'Shape Tokens (radii, borders, shadows)',
    Motion: 'Motion Tokens',
    Semantic: 'Semantic Tokens',
  };
  const title = nameMap[collectionName] || collectionName;
  return (
    `/* ------------------------------------------------------------------\n` +
    `   Laurel Design — ${title}\n` +
    `\n` +
    `   Auto-generated from Figma variables. Do not edit manually.\n` +
    `   Run: node scripts/figma-variables/sync.mjs pull\n` +
    `   ------------------------------------------------------------------ */\n\n`
  );
}
