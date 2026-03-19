/**
 * Figma Variables REST API client.
 *
 * Expects FIGMA_ACCESS_TOKEN env var (personal access token with variables:read + variables:write scopes).
 * File key defaults to the Laurelma-DS file but can be overridden.
 *
 * Docs: https://developers.figma.com/docs/rest-api/variables/
 */

const BASE = 'https://api.figma.com/v1';
const DEFAULT_FILE_KEY = 'Ni2hCq5zflPlamYJfpIV68';

function getToken() {
  const token = process.env.FIGMA_ACCESS_TOKEN;
  if (!token) {
    throw new Error(
      'Missing FIGMA_ACCESS_TOKEN env var.\n' +
        'Generate one at https://www.figma.com/developers/api#authentication\n' +
        'Required scopes: file_variables:read, file_variables:write'
    );
  }
  return token;
}

async function request(path, { method = 'GET', body } = {}) {
  const url = `${BASE}${path}`;
  const headers = {
    'X-Figma-Token': getToken(),
    'Content-Type': 'application/json',
  };

  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Figma API ${method} ${path} → ${res.status}: ${text}`);
  }

  return res.json();
}

// ── Read endpoints ──────────────────────────────────────────────────

/**
 * GET /v1/files/:file_key/variables/local
 * Returns all local variable collections and variables in the file.
 */
export async function getLocalVariables(fileKey = DEFAULT_FILE_KEY) {
  const data = await request(`/files/${fileKey}/variables/local`);
  return data.meta; // { variableCollections, variables }
}

/**
 * GET /v1/files/:file_key/variables/published
 * Returns published variable collections and variables.
 */
export async function getPublishedVariables(fileKey = DEFAULT_FILE_KEY) {
  const data = await request(`/files/${fileKey}/variables/published`);
  return data.meta;
}

// ── Write endpoints ─────────────────────────────────────────────────

/**
 * POST /v1/files/:file_key/variables
 * Create, update, or delete variables and collections in bulk.
 *
 * @param {Object} payload - The variables mutation payload
 * @param {Array}  [payload.variableCollections]  - Collections to create/update
 * @param {Array}  [payload.variableModes]        - Modes to create/rename
 * @param {Array}  [payload.variables]             - Variables to create/update
 * @param {Array}  [payload.variableModeValues]    - Per-mode values to set
 * @param {string} [fileKey]
 */
export async function postVariables(payload, fileKey = DEFAULT_FILE_KEY) {
  return request(`/files/${fileKey}/variables`, {
    method: 'POST',
    body: payload,
  });
}

// ── Helpers ─────────────────────────────────────────────────────────

/**
 * Fetches variables and restructures them into a convenient lookup.
 * Returns { collections: Map<name, collection>, variables: Map<id, variable> }
 */
export async function fetchStructured(fileKey = DEFAULT_FILE_KEY) {
  const { variableCollections, variables } = await getLocalVariables(fileKey);

  const collectionsById = new Map();
  const collectionsByName = new Map();
  for (const [id, col] of Object.entries(variableCollections)) {
    collectionsById.set(id, col);
    collectionsByName.set(col.name, col);
  }

  const variablesById = new Map();
  const variablesByCollection = new Map(); // collectionName → [variable, ...]
  for (const [id, v] of Object.entries(variables)) {
    variablesById.set(id, v);
    const col = collectionsById.get(v.variableCollectionId);
    const colName = col?.name ?? 'Unknown';
    if (!variablesByCollection.has(colName)) {
      variablesByCollection.set(colName, []);
    }
    variablesByCollection.get(colName).push(v);
  }

  return { collectionsById, collectionsByName, variablesById, variablesByCollection };
}

export { DEFAULT_FILE_KEY };
