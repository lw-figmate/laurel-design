### Pagination

**Purpose**: Page navigation controls.

**Import**: `import { Pagination } from '@anthropic/laurel-design'`

**Props**:
- `totalPages` — Number (required)
- `currentPage` — Number (1-based, required)
- `onPageChange` — `(page: number) => void` (required)
- `siblingCount` — Number (default: 1)

**Example**:
```tsx
<Pagination totalPages={10} currentPage={currentPage} onPageChange={setCurrentPage} />
```
