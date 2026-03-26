### DataTable

**Import**: `import { DataTable } from '@anthropic/laurel-design'`

Advanced data table with sorting, pagination, and column definitions.

**Example**:
```tsx
<DataTable
  columns={[
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email' },
    { key: 'status', header: 'Status' },
  ]}
  data={users}
/>
```

**Guidelines**: For simple static tables, use `Table` molecule.
