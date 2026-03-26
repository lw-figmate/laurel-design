### Table

**Purpose**: Data table for displaying structured information.

**Import**: `import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from '@anthropic/laurel-design'`

**Props**:
- `Table`: `striped` — Boolean
- `TableRow`: `selected` — Boolean
- `TableHeaderCell`: `sortable`, `sortDirection` (`'asc'`|`'desc'`|`'none'`), `onSort`

**Example**:
```tsx
<Table striped>
  <TableHeader>
    <TableRow>
      <TableHeaderCell sortable sortDirection="asc" onSort={() => {}}>Name</TableHeaderCell>
      <TableHeaderCell>Email</TableHeaderCell>
      <TableHeaderCell>Status</TableHeaderCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Jane Doe</TableCell>
      <TableCell>jane@example.com</TableCell>
      <TableCell><Badge variant="success">Active</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>
```

**Guidelines**:
- For advanced features (pagination, filtering, sorting), use the `DataTable` organism.
- Use `striped` for better readability of dense data.
