import figma from '@figma/code-connect';
import { TablePage } from './TablePage';

figma.connect(TablePage, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_TABLE_PAGE', {
  props: {},
  example: () => (
    <TablePage
      title="Data Table"
      columns={[{ key: 'name', header: 'Name', render: (row: Record<string, unknown>) => String(row.name) }]}
      data={[]}
    />
  ),
});
