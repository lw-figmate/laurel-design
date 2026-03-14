import type { ComponentPropsWithRef, ReactNode } from 'react';
import type { DataTableColumn } from '../../organisms/DataTable';

export interface TablePageProps<T extends Record<string, unknown> = Record<string, unknown>>
  extends Omit<ComponentPropsWithRef<'div'>, 'children'> {
  /** Page title */
  title: string;
  /** Table data */
  data: T[];
  /** Table columns */
  columns: DataTableColumn<T>[];
  /** Filter / toolbar area */
  toolbar?: ReactNode;
  /** Primary action button (e.g. "Add new") */
  primaryAction?: ReactNode;
  /** Breadcrumb items */
  breadcrumbs?: Array<{ label: string; href?: string }>;
  /** Whether data is loading */
  loading?: boolean;
  /** Empty state content */
  emptyState?: ReactNode;
}
