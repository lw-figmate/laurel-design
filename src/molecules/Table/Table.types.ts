import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TableProps extends ComponentPropsWithRef<'table'> {
  /** Striped row styling */
  striped?: boolean;
  /** Table content */
  children: ReactNode;
}

export interface TableHeaderProps extends ComponentPropsWithRef<'thead'> {
  children: ReactNode;
}

export interface TableBodyProps extends ComponentPropsWithRef<'tbody'> {
  children: ReactNode;
}

export interface TableRowProps extends ComponentPropsWithRef<'tr'> {
  /** Whether this row is selected */
  selected?: boolean;
  children: ReactNode;
}

export interface TableHeaderCellProps extends ComponentPropsWithRef<'th'> {
  /** Enable sort indicator */
  sortable?: boolean;
  /** Current sort direction */
  sortDirection?: 'asc' | 'desc' | 'none';
  /** Called when sort is toggled */
  onSort?: () => void;
  children: ReactNode;
}

export interface TableCellProps extends ComponentPropsWithRef<'td'> {
  children?: ReactNode;
}
