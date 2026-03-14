import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { DataTable } from './DataTable';
import type { DataTableColumn } from './DataTable.types';

interface Row {
  id: string;
  name: string;
  age: number;
}

const data: Row[] = [
  { id: '1', name: 'Alice', age: 30 },
  { id: '2', name: 'Bob', age: 25 },
  { id: '3', name: 'Carol', age: 35 },
  { id: '4', name: 'Dave', age: 28 },
  { id: '5', name: 'Eve', age: 22 },
];

const columns: DataTableColumn<Row>[] = [
  { key: 'name', header: 'Name', render: (r) => r.name, sortable: true },
  { key: 'age', header: 'Age', render: (r) => String(r.age), sortable: true },
];

const rowKey = (r: Row) => r.id;

describe('DataTable', () => {
  it('renders table with data', () => {
    render(<DataTable columns={columns} data={data} rowKey={rowKey} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  it('shows empty message when data is empty', () => {
    render(<DataTable columns={columns} data={[]} rowKey={rowKey} emptyMessage="Nothing here" />);
    expect(screen.getByText('Nothing here')).toBeInTheDocument();
  });

  it('paginates data when pageSize is set', () => {
    render(<DataTable columns={columns} data={data} rowKey={rowKey} pageSize={2} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.queryByText('Carol')).not.toBeInTheDocument();
  });

  it('navigates pages', async () => {
    const user = userEvent.setup();
    render(<DataTable columns={columns} data={data} rowKey={rowKey} pageSize={2} />);
    await user.click(screen.getByLabelText('Next page'));
    expect(screen.getByText('Carol')).toBeInTheDocument();
    expect(screen.queryByText('Alice')).not.toBeInTheDocument();
  });

  it('sorts by column', async () => {
    const user = userEvent.setup();
    render(<DataTable columns={columns} data={data} rowKey={rowKey} />);
    await user.click(screen.getByText('Name').closest('th')!);
    const cells = screen.getAllByRole('cell');
    const names = cells.filter((_, i) => i % 2 === 0).map((c) => c.textContent);
    expect(names).toEqual(['Alice', 'Bob', 'Carol', 'Dave', 'Eve']);
  });

  it('renders search field when searchable', () => {
    render(<DataTable columns={columns} data={data} rowKey={rowKey} searchable />);
    expect(screen.getByLabelText('Search table')).toBeInTheDocument();
  });

  it('filters via search', async () => {
    const user = userEvent.setup();
    render(
      <DataTable
        columns={columns}
        data={data}
        rowKey={rowKey}
        searchable
        filterFn={(row, q) => row.name.toLowerCase().includes(q.toLowerCase())}
      />,
    );
    await user.type(screen.getByLabelText('Search table'), 'ali');
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.queryByText('Bob')).not.toBeInTheDocument();
  });
});
