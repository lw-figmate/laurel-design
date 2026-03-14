import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TablePage } from './TablePage';

describe('TablePage', () => {
  const columns = [
    { key: 'name', header: 'Name', render: (row: { name: string }) => row.name },
  ];
  const data = [{ name: 'Item 1' }, { name: 'Item 2' }];

  it('renders title', () => {
    render(<TablePage title="Products" columns={columns} data={data} />);
    expect(screen.getByText('Products')).toBeInTheDocument();
  });

  it('renders table data', () => {
    render(<TablePage title="Products" columns={columns} data={data} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders toolbar', () => {
    render(
      <TablePage title="Products" columns={columns} data={data} toolbar={<button>Filter</button>} />,
    );
    expect(screen.getByRole('button', { name: 'Filter' })).toBeInTheDocument();
  });

  it('renders primary action', () => {
    render(
      <TablePage title="Products" columns={columns} data={data} primaryAction={<button>Add new</button>} />,
    );
    expect(screen.getByRole('button', { name: 'Add new' })).toBeInTheDocument();
  });

  it('shows loading spinner', () => {
    render(<TablePage title="Products" columns={columns} data={[]} loading />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('shows empty state when data is empty', () => {
    render(
      <TablePage
        title="Products"
        columns={columns}
        data={[]}
        emptyState={<p>No products found</p>}
      />,
    );
    expect(screen.getByText('No products found')).toBeInTheDocument();
  });
});
