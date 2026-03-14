import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataTable } from './DataTable';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const users: User[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
  { id: '3', name: 'Carol White', email: 'carol@example.com', role: 'Viewer' },
  { id: '4', name: 'Dave Brown', email: 'dave@example.com', role: 'Editor' },
  { id: '5', name: 'Eve Davis', email: 'eve@example.com', role: 'Admin' },
  { id: '6', name: 'Frank Miller', email: 'frank@example.com', role: 'Viewer' },
];

const meta = {
  title: 'Organisms/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  decorators: [(Story) => <div className="max-w-3xl"><Story /></div>],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: [
      { key: 'name', header: 'Name', render: (r: User) => r.name, sortable: true },
      { key: 'email', header: 'Email', render: (r: User) => r.email },
      { key: 'role', header: 'Role', render: (r: User) => r.role, sortable: true },
    ],
    data: users,
    rowKey: (r: User) => r.id,
  },
};

export const WithPagination: Story = {
  args: {
    ...Default.args,
    pageSize: 3,
  },
};

export const Searchable: Story = {
  args: {
    ...Default.args,
    searchable: true,
    filterFn: (r: User, q: string) => r.name.toLowerCase().includes(q.toLowerCase()),
  },
};
