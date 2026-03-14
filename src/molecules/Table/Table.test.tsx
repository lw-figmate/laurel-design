import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from './Table';

const renderTable = (props: Record<string, unknown> = {}) =>
  render(
    <Table {...props}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell>30</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob</TableCell>
          <TableCell>25</TableCell>
        </TableRow>
      </TableBody>
    </Table>,
  );

describe('Table', () => {
  it('renders a table with headers and rows', () => {
    renderTable();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  it('applies striped class', () => {
    const { container } = renderTable({ striped: true });
    const table = container.querySelector('table')!;
    expect(table.getAttribute('class')).toContain('nth-child');
  });

  it('supports selected row', () => {
    render(
      <Table>
        <TableBody>
          <TableRow selected data-testid="row">
            <TableCell>Selected</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
    expect(screen.getByTestId('row').getAttribute('class')).toContain('brand');
  });

  it('supports sortable header cell', async () => {
    const user = userEvent.setup();
    const onSort = vi.fn();
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell sortable sortDirection="asc" onSort={onSort}>Name</TableHeaderCell>
          </TableRow>
        </TableHeader>
      </Table>,
    );
    const th = screen.getByText('Name').closest('th')!;
    expect(th.getAttribute('aria-sort')).toBe('ascending');
    await user.click(th);
    expect(onSort).toHaveBeenCalledOnce();
  });

  it('shows descending sort', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell sortable sortDirection="desc">Col</TableHeaderCell>
          </TableRow>
        </TableHeader>
      </Table>,
    );
    expect(screen.getByText('Col').closest('th')!.getAttribute('aria-sort')).toBe('descending');
  });
});
