import figma from '@figma/code-connect';
import { DataTable } from './DataTable';

figma.connect(DataTable, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_DATA_TABLE', {
  props: {
    searchable: figma.boolean('Searchable'),
    striped: figma.boolean('Striped'),
  },
  example: (props) => (
    <DataTable
      columns={[{ key: 'name', header: 'Name', render: (r: { name: string }) => r.name }]}
      data={[]}
      rowKey={() => ''}
      {...props}
    />
  ),
});
