import { forwardRef } from 'react';
import type {
  TableProps,
  TableHeaderProps,
  TableBodyProps,
  TableRowProps,
  TableHeaderCellProps,
  TableCellProps,
} from './Table.types';

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ striped = false, className = '', children, ...rest }, ref) => (
    <div className="overflow-x-auto">
      <table
        ref={ref}
        className={[
          'w-full border-collapse text-left',
          'font-[family-name:var(--laurel-font-sans)] text-[length:var(--laurel-font-size-sm)]',
          'text-[var(--laurel-text-secondary)]',
          striped ? '[&_tbody_tr:nth-child(even)]:bg-[var(--laurel-bg-muted)]' : '',
          className,
        ].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </table>
    </div>
  ),
);

Table.displayName = 'Table';

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className = '', children, ...rest }, ref) => (
    <thead
      ref={ref}
      className={[
        'border-b-2 border-[var(--laurel-border-subtle)]',
        'text-[length:var(--laurel-font-size-xs)] font-[var(--laurel-font-weight-semibold)]',
        'text-[var(--laurel-text-muted)] uppercase tracking-wider',
        className,
      ].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </thead>
  ),
);

TableHeader.displayName = 'TableHeader';

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className = '', children, ...rest }, ref) => (
    <tbody
      ref={ref}
      className={[
        '[&_tr]:border-b [&_tr]:border-[var(--laurel-border-muted)]',
        className,
      ].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </tbody>
  ),
);

TableBody.displayName = 'TableBody';

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ selected = false, className = '', children, ...rest }, ref) => (
    <tr
      ref={ref}
      className={[
        'transition-colors',
        selected ? 'bg-[var(--laurel-bg-brand-muted)]' : 'hover:bg-[var(--laurel-bg-muted)]',
        className,
      ].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </tr>
  ),
);

TableRow.displayName = 'TableRow';

const TableHeaderCell = forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
  ({ sortable = false, sortDirection = 'none', onSort, className = '', children, ...rest }, ref) => (
    <th
      ref={ref}
      className={[
        'px-[var(--laurel-space-4)] py-[var(--laurel-space-3)]',
        sortable ? 'cursor-pointer select-none' : '',
        className,
      ].filter(Boolean).join(' ')}
      onClick={sortable ? onSort : undefined}
      aria-sort={sortable && sortDirection !== 'none' ? (sortDirection === 'asc' ? 'ascending' : 'descending') : undefined}
      {...rest}
    >
      <span className="inline-flex items-center gap-[var(--laurel-space-1)]">
        {children}
        {sortable && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={[
              'h-4 w-4 transition-transform',
              sortDirection === 'none' ? 'opacity-30' : 'opacity-100',
              sortDirection === 'desc' ? 'rotate-180' : '',
            ].join(' ')}
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M10 3a.75.75 0 0 1 .55.24l3.25 3.5a.75.75 0 1 1-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 0 1-1.1-1.02l3.25-3.5A.75.75 0 0 1 10 3Z" clipRule="evenodd" />
          </svg>
        )}
      </span>
    </th>
  ),
);

TableHeaderCell.displayName = 'TableHeaderCell';

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className = '', children, ...rest }, ref) => (
    <td
      ref={ref}
      className={['px-[var(--laurel-space-4)] py-[var(--laurel-space-3)]', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </td>
  ),
);

TableCell.displayName = 'TableCell';

export { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell };
