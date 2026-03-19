#!/usr/bin/env node
/**
 * Figma Variables ↔ CSS Token Sync
 *
 * Two-way sync between Figma variable collections and src/tokens/ CSS files.
 *
 * Commands:
 *   pull [--dry-run]   Fetch Figma variables → regenerate CSS token files
 *   push [--dry-run]   Parse CSS tokens → create/update Figma variables
 *   diff               Compare CSS tokens against Figma and show differences
 *
 * Environment:
 *   FIGMA_ACCESS_TOKEN  Personal access token with file_variables:read/write scopes
 *
 * Examples:
 *   node scripts/figma-variables/sync.mjs pull
 *   node scripts/figma-variables/sync.mjs push --dry-run
 *   node scripts/figma-variables/sync.mjs diff
 */

import { pull } from './pull.mjs';
import { push } from './push.mjs';
import { fetchStructured } from './client.mjs';
import {
  parseCssTokenFile,
  cssVarToFigmaName,
  figmaNameToCssVar,
  COLLECTION_MAP,
} from './parsers.mjs';

const [command, ...flags] = process.argv.slice(2);
const dryRun = flags.includes('--dry-run');

switch (command) {
  case 'pull':
    await pull({ dryRun });
    break;

  case 'push':
    await push({ dryRun });
    break;

  case 'diff':
    await diff();
    break;

  default:
    console.log(`
Figma Variables ↔ CSS Token Sync

Usage: node scripts/figma-variables/sync.mjs <command> [options]

Commands:
  pull [--dry-run]   Figma → CSS: regenerate token files from Figma variables
  push [--dry-run]   CSS → Figma: update Figma variables from token files
  diff               Show differences between CSS tokens and Figma variables

Environment:
  FIGMA_ACCESS_TOKEN   Required. Figma personal access token.
`);
    process.exit(command ? 1 : 0);
}

// ── Diff command ────────────────────────────────────────────────────

async function diff() {
  console.log('🔍 Comparing CSS tokens against Figma variables…\n');

  // Parse CSS tokens
  const cssVars = new Map(); // figmaName → { cssVar, value, collection }
  for (const { css, collection } of COLLECTION_MAP) {
    const tokens = parseCssTokenFile(css);
    for (const token of tokens) {
      if (token.selector !== ':root') continue; // Only compare light mode for diff
      const figmaName = cssVarToFigmaName(token.name, collection);
      cssVars.set(`${collection}/${figmaName}`, {
        cssVar: token.name,
        value: token.value,
        collection,
        figmaName,
      });
    }
  }

  // Fetch Figma variables
  const { collectionsByName, variablesByCollection, collectionsById } = await fetchStructured();

  const figmaVars = new Map(); // "collection/figmaName" → variable
  for (const [colName, vars] of variablesByCollection) {
    for (const v of vars) {
      figmaVars.set(`${colName}/${v.name}`, v);
    }
  }

  // Compare
  const onlyCss = [];
  const onlyFigma = [];
  const both = [];

  for (const [key, cssToken] of cssVars) {
    if (figmaVars.has(key)) {
      both.push(key);
    } else {
      onlyCss.push(cssToken);
    }
  }

  for (const [key, figmaVar] of figmaVars) {
    if (!cssVars.has(key)) {
      const col = collectionsById.get(figmaVar.variableCollectionId);
      onlyFigma.push({
        figmaName: figmaVar.name,
        collection: col?.name || 'Unknown',
      });
    }
  }

  // Report
  console.log(`✅ In sync: ${both.length} variables\n`);

  if (onlyCss.length > 0) {
    console.log(`📄 Only in CSS (${onlyCss.length}):`);
    for (const t of onlyCss) {
      console.log(`   ${t.collection} → ${t.cssVar}`);
    }
    console.log();
  }

  if (onlyFigma.length > 0) {
    console.log(`🎨 Only in Figma (${onlyFigma.length}):`);
    for (const t of onlyFigma) {
      console.log(`   ${t.collection} → ${t.figmaName}`);
    }
    console.log();
  }

  if (onlyCss.length === 0 && onlyFigma.length === 0) {
    console.log('🎉 CSS and Figma are fully in sync!');
  } else {
    console.log(`Run "push" to send CSS-only tokens to Figma, or "pull" to fetch Figma-only variables.`);
  }
}
