### FilterPanel

**Import**: `import { FilterPanel } from '@anthropic/laurel-design'`

Filter sidebar panel for filtering lists or tables.

**Example**:
```tsx
<FilterPanel sections={[{ title: 'Status', type: 'checkbox', options: ['Active', 'Inactive'] }, { title: 'Date Range', type: 'dateRange' }]} onApply={handleFilter} />
```
