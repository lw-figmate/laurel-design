import { forwardRef, useState, useMemo, useCallback } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from '../../molecules/Table';
import { Pagination } from '../../molecules/Pagination';
import { SearchField } from '../../molecules/SearchField';
import { Text } from '../../atoms/Text';
import type { DataTableProps, DataTableColumn } from './DataTable.types';

function DataTableInner<T>(
  {
    columns,
    data,
    rowKey,
    pageSize,
    searchable = false,
    searchPlaceholder = 'Search…',
    filterFn,
    striped = false,
    emptyMessage = 'No data to display.',
    className = '',
    ...rest
  }: DataTableProps<T> & { ref?: React.Ref<HTMLDivElement> },
  ref: React.Ref<HTMLDivElement>,
) {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const filtered = useMemo(() => {
    if (!query) return data;
    if (filterFn) return data.filter((row) => filterFn(row, query));
    const lower = query.toLowerCase();
    return data.filter((row) =>
      columns.some((col) => {
        const val = col.render(row);
        return typeof val === 'string' && val.toLowerCase().includes(lower);
      }),
    );
  }, [data, query, filterFn, columns]);

  const sorted = useMemo(() => {
    if (!sortKey) return filtered;
    const col = columns.find((c) => c.key === sortKey);
    if (!col) return filtered;
    return [...filtered].sort((a, b) => {
      const aVal = String(col.render(a) ?? '');
      const bVal = String(col.render(b) ?? '');
      const cmp = aVal.localeCompare(bVal);
      return sortDir === 'asc' ? cmp : -cmp;
    });
  }, [filtered, sortKey, sortDir, columns]);

  const totalPages = pageSize ? Math.max(1, Math.ceil(sorted.length / pageSize)) : 1;
  const paginated = pageSize ? sorted.slice((currentPage - 1) * pageSize, currentPage * pageSize) : sorted;

  const handleSort = useCallback(
    (key: string) => {
      if (sortKey === key) {
        setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
      } else {
        setSortKey(key);
        setSortDir('asc');
      }
      setCurrentPage(1);
    },
    [sortKey],
  );

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    setCurrentPage(1);
  }, []);

  return (
    <div
      ref={ref}
      className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {searchable && (
        <div className="mb-[var(--laurel-space-4)]">
          <SearchField
            placeholder={searchPlaceholder}
            onChange={(e) => handleSearch(e.currentTarget.value)}
            onClear={() => handleSearch('')}
            aria-label="Search table"
          />
        </div>
      )}

      <Table striped={striped}>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHeaderCell
                key={col.key}
                sortable={col.sortable}
                sortDirection={sortKey === col.key ? sortDir : 'none'}
                onSort={col.sortable ? () => handleSort(col.key) : undefined}
              >
                {col.header}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginated.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <Text as="span" size="sm" className="text-[var(--laurel-text-muted)] py-[var(--laurel-space-4)] block text-center">
                  {emptyMessage}
                </Text>
              </TableCell>
            </TableRow>
          ) : (
            paginated.map((row) => (
              <TableRow key={rowKey(row)}>
                {columns.map((col) => (
                  <TableCell key={col.key}>{col.render(row)}</TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {pageSize && totalPages > 1 && (
        <div className="flex justify-end mt-[var(--laurel-space-4)]">
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
        </div>
      )}
    </div>
  );
}

const DataTable = forwardRef(DataTableInner) as <T>(
  props: DataTableProps<T> & { ref?: React.Ref<HTMLDivElement> },
) => React.ReactElement;

(DataTable as { displayName?: string }).displayName = 'DataTable';

export { DataTable };
