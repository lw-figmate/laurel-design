import type { Meta, StoryObj } from '@storybook/react-vite';
import { TablePage } from './TablePage';

const meta = {
  title: 'Templates/TablePage',
  component: TablePage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof TablePage>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { name: 'Widget A', price: '$9.99', stock: '142' },
  { name: 'Widget B', price: '$19.99', stock: '87' },
  { name: 'Widget C', price: '$4.99', stock: '563' },
];

const sampleColumns = [
  { key: 'name', header: 'Name', render: (row: (typeof sampleData)[0]) => row.name, sortable: true },
  { key: 'price', header: 'Price', render: (row: (typeof sampleData)[0]) => row.price },
  { key: 'stock', header: 'Stock', render: (row: (typeof sampleData)[0]) => row.stock },
];

export const Default: Story = {
  args: {
    title: 'Products',
    breadcrumbs: [{ label: 'Home', href: '#' }, { label: 'Products' }],
    columns: sampleColumns,
    data: sampleData,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    ...Default.args,
    data: [],
    emptyState: <div style={{ textAlign: 'center', padding: '3rem' }}>No products found.</div>,
  },
};
