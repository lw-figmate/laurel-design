import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface DataTableColumn<T> {
  /** Unique key for this column */
  key: string;
  /** Column header label */
  header: string;
  /** Render cell content */
  render: (row: T) => ReactNode;
  /** Whether this column is sortable */
  sortable?: boolean;
}

export interface DataTableProps<T> extends Omit<ComponentPropsWithRef<'div'>, 'children'> {
  /** Column definitions */
  columns: DataTableColumn<T>[];
  /** Row data */
  data: T[];
  /** Unique key extractor per row */
  rowKey: (row: T) => string;
  /** Rows per page (enables pagination when set) */
  pageSize?: number;
  /** Enable search filtering */
  searchable?: boolean;
  /** Placeholder for search input */
  searchPlaceholder?: string;
  /** Custom filter function for search */
  filterFn?: (row: T, query: string) => boolean;
  /** Striped rows */
  striped?: boolean;
  /** Empty state message */
  emptyMessage?: string;
}
