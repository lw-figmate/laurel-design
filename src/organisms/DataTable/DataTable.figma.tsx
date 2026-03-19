import figma from '@figma/code-connect';
import { DataTable } from './DataTable';

figma.connect(DataTable, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=25:3940', {
  props: {
    searchable: figma.boolean('Searchable'),
  },
  example: ({ searchable }) => (
    <DataTable
      columns={[{ key: 'name', header: 'Name', render: (r: { name: string }) => r.name }]}
      data={[]}
      rowKey={() => ''}
      searchable={searchable}
    />
  ),
});
