import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from './Table';

const meta = {
  title: 'Molecules/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    striped: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="max-w-2xl"><Story /></div>],
  parameters: {
    docs: {
      description: {
        component: 'Data table with sortable headers, striped rows, and row selection. Composed of Table, TableHeader, TableBody, TableRow, and TableCell sub-components.',
      },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice Johnson</TableCell>
          <TableCell>alice@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Smith</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>Editor</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Carol White</TableCell>
          <TableCell>carol@example.com</TableCell>
          <TableCell>Viewer</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table striped>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Product</TableHeaderCell>
          <TableHeaderCell>Price</TableHeaderCell>
          <TableHeaderCell>Stock</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {['Widget A', 'Widget B', 'Widget C', 'Widget D'].map((name, i) => (
          <TableRow key={name}>
            <TableCell>{name}</TableCell>
            <TableCell>${(i + 1) * 9.99}</TableCell>
            <TableCell>{(i + 1) * 25}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Sortable: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell sortable sortDirection="asc">Name</TableHeaderCell>
          <TableHeaderCell sortable sortDirection="none">Age</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell>30</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
