/**
 * Push: CSS token files → Figma Variables
 *
 * Parses the CSS token files and creates/updates Figma variables
 * to match. Uses the Variables REST API bulk mutation endpoint.
 *
 * Usage: node scripts/figma-variables/sync.mjs push [--dry-run]
 */

import { fetchStructured, postVariables } from './client.mjs';
import {
  parseCssTokenFile,
  cssVarToFigmaName,
  cssColorToFigma,
  cssNumericToFigma,
  parseVarReference,
  detectCollection,
  COLLECTION_MAP,
} from './parsers.mjs';

export async function push({ dryRun = false } = {}) {
  console.log('⬆  Reading CSS tokens…');

  // 1. Parse all CSS token files
  const cssTokens = new Map(); // collectionName → [{ cssVar, value, selector }]
  for (const { css, collection } of COLLECTION_MAP) {
    const parsed = parseCssTokenFile(css);
    cssTokens.set(collection, parsed);
    console.log(`   Parsed ${css}: ${parsed.length} declarations`);
  }

  // 2. Fetch current Figma state
  console.log('\n⬇  Fetching current Figma variables…');
  const { collectionsByName, variablesByCollection, variablesById, collectionsById } =
    await fetchStructured();

  // Build a lookup: figmaName → variable (for alias resolution)
  const figmaVarByName = new Map();
  for (const [, v] of variablesById) {
    figmaVarByName.set(v.name, v);
  }

  // 3. Build mutation payload
  const payload = {
    variableCollections: [],
    variableModes: [],
    variables: [],
    variableModeValues: [],
  };

  let created = 0;
  let updated = 0;
  let skipped = 0;

  for (const { collection, type } of COLLECTION_MAP) {
    const tokens = cssTokens.get(collection);
    if (!tokens || tokens.length === 0) continue;

    const col = collectionsByName.get(collection);
    if (!col) {
      console.log(`   ⚠  Collection "${collection}" not found in Figma — will create`);

      if (collection === 'Semantic') {
        // Semantic needs Light + Dark modes. New collections come with one default
        // mode, so use initialModeId to reference it, UPDATE to rename it "Light",
        // then CREATE a second "Dark" mode.
        payload.variableCollections.push({
          action: 'CREATE',
          id: `temp_col_${collection}`,
          name: collection,
          initialModeId: 'temp_mode_light',
        });
        payload.variableModes.push(
          {
            action: 'UPDATE',
            id: 'temp_mode_light',
            name: 'Light',
            variableCollectionId: `temp_col_${collection}`,
          },
          {
            action: 'CREATE',
            id: 'temp_mode_dark',
            name: 'Dark',
            variableCollectionId: `temp_col_${collection}`,
          }
        );
      } else {
        // Single-mode collections: set initialModeId so we can reference it
        // in variableModeValues later.
        payload.variableCollections.push({
          action: 'CREATE',
          id: `temp_col_${collection}`,
          name: collection,
          initialModeId: `temp_mode_${collection}`,
        });
        payload.variableModes.push({
          action: 'UPDATE',
          id: `temp_mode_${collection}`,
          name: 'Default',
          variableCollectionId: `temp_col_${collection}`,
        });
      }
    }

    // Group tokens by selector to handle light/dark modes
    const lightTokens = tokens.filter((t) => t.selector === ':root');
    const darkTokens = tokens.filter((t) => t.selector === '[data-theme="dark"]');

    // Resolve mode IDs — for existing collections use real mode IDs,
    // for new collections use the temp IDs we assigned above.
    let lightModeId, darkModeId;
    if (col) {
      const modes = col.modes;
      const lightMode = modes.find((m) => /light/i.test(m.name)) || modes[0];
      const darkMode = modes.find((m) => /dark/i.test(m.name)) || modes[1];
      lightModeId = lightMode?.modeId;
      darkModeId = darkMode?.modeId;
    } else if (collection === 'Semantic') {
      lightModeId = 'temp_mode_light';
      darkModeId = 'temp_mode_dark';
    } else {
      lightModeId = `temp_mode_${collection}`;
      darkModeId = null;
    }

    // Process light mode tokens
    for (const token of lightTokens) {
      // Skip non-variable tokens (shadows with complex values, composed transitions, etc.)
      if (isNonVariableToken(token, collection)) {
        skipped++;
        continue;
      }

      const figmaName = cssVarToFigmaName(token.name, collection);
      const existingVar = findExistingVariable(figmaName, collection, variablesByCollection);

      const resolvedType = resolveVariableType(type, token, collection);

      if (existingVar) {
        // Update existing variable's value
        const figmaValue = convertCssValueToFigma(token.value, resolvedType, figmaVarByName, collection);
        if (figmaValue === null) {
          skipped++;
          continue;
        }

        if (lightModeId) {
          payload.variableModeValues.push({
            variableId: existingVar.id,
            modeId: lightModeId,
            value: figmaValue,
          });
        }
        // Also update codeSyntax if not already set
        if (!existingVar.codeSyntax?.WEB) {
          payload.variables.push({
            action: 'UPDATE',
            id: existingVar.id,
            codeSyntax: { WEB: token.name },
          });
        }
        updated++;
      } else {
        // Create new variable
        const tempId = `temp_var_${collection}_${figmaName}`;
        const colId = col?.id || `temp_col_${collection}`;

        payload.variables.push({
          action: 'CREATE',
          id: tempId,
          name: figmaName,
          variableCollectionId: colId,
          resolvedType: resolvedType,
          codeSyntax: { WEB: token.name },
        });

        const figmaValue = convertCssValueToFigma(token.value, resolvedType, figmaVarByName, collection);
        if (figmaValue !== null && lightModeId) {
          payload.variableModeValues.push({
            variableId: tempId,
            modeId: lightModeId,
            value: figmaValue,
          });
        }
        created++;
      }
    }

    // Process dark mode tokens (semantic only)
    if (darkModeId) {
      for (const token of darkTokens) {
        if (isNonVariableToken(token, collection)) continue;

        const figmaName = cssVarToFigmaName(token.name, collection);
        const existingVar = findExistingVariable(figmaName, collection, variablesByCollection);
        const resolvedType = resolveVariableType(type, token, collection);

        const figmaValue = convertCssValueToFigma(token.value, resolvedType, figmaVarByName, collection);
        if (figmaValue === null) continue;

        const varId = existingVar?.id || `temp_var_${collection}_${figmaName}`;

        payload.variableModeValues.push({
          variableId: varId,
          modeId: darkModeId,
          value: figmaValue,
        });
      }
    }
  }

  // 4. Execute or report
  console.log(
    `\n📊 Changes: ${created} create, ${updated} update, ${skipped} skipped (non-variable)`
  );

  // Clean empty arrays to avoid API errors
  if (payload.variableCollections.length === 0) delete payload.variableCollections;
  if (payload.variableModes.length === 0) delete payload.variableModes;
  if (payload.variables.length === 0) delete payload.variables;
  if (payload.variableModeValues.length === 0) delete payload.variableModeValues;

  if (dryRun) {
    console.log('\n[dry-run] Would send payload:');
    console.log(JSON.stringify(payload, null, 2).slice(0, 2000) + '…');
  } else if (created + updated > 0) {
    console.log('\n📤 Pushing to Figma…');
    await postVariables(payload);
    console.log('✅ Push complete');
  } else {
    console.log('\n✅ Nothing to push — Figma is up to date');
  }

  return { created, updated, skipped };
}

// ── Helpers ─────────────────────────────────────────────────────────

function isNonVariableToken(token, collection) {
  // Shadows can't be Figma variables (complex multi-value)
  if (token.name.startsWith('--laurel-shadow-')) return true;
  // Easing (cubic-bezier) can't be Figma variables
  if (token.name.startsWith('--laurel-ease-')) return true;
  // Composed transitions can't be variables
  if (token.name.startsWith('--laurel-transition-')) return true;
  // Font families (string lists) can't be Figma FLOAT variables
  if (token.name.startsWith('--laurel-font-sans') || token.name.startsWith('--laurel-font-mono')) return true;
  // Overlay values (rgb with alpha) are complex for Figma variable aliasing
  if (token.value.startsWith('rgb(') && collection === 'Semantic') return true;
  return false;
}

function findExistingVariable(figmaName, collectionName, variablesByCollection) {
  const vars = variablesByCollection.get(collectionName) || [];
  return vars.find((v) => v.name === figmaName) || null;
}

function resolveVariableType(defaultType, token, collection) {
  // Semantic tokens are always COLOR (they alias primitives)
  if (collection === 'Semantic') return 'COLOR';
  if (collection === 'Primitives') return 'COLOR';
  return 'FLOAT';
}

function convertCssValueToFigma(cssValue, resolvedType, figmaVarByName, collection) {
  // Check for var() references → variable alias
  const varRef = parseVarReference(cssValue);
  if (varRef) {
    const refCollection = detectCollection(varRef);
    if (refCollection) {
      const refFigmaName = cssVarToFigmaName(varRef, refCollection);
      const target = figmaVarByName.get(refFigmaName);
      if (target) {
        return { type: 'VARIABLE_ALIAS', id: target.id };
      }
    }
    // Can't resolve alias — skip
    return null;
  }

  // Direct value
  if (resolvedType === 'COLOR') {
    return cssColorToFigma(cssValue);
  }

  const num = cssNumericToFigma(cssValue);
  return num;
}
