### SearchField

**Purpose**: Search input with built-in search icon.

**Import**: `import { SearchField } from '@anthropic/laurel-design'`

**Example**:
```tsx
<SearchField placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onClear={() => setQuery('')} />
```
