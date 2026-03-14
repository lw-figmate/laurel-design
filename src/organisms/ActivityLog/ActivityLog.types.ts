import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ActivityEvent {
  /** Unique identifier */
  id: string;
  /** Event title */
  title: string;
  /** Event description */
  description?: string;
  /** Timestamp string */
  timestamp: string;
  /** Icon element */
  icon?: ReactNode;
  /** Event variant for timeline marker */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
}

export interface ActivityLogProps extends ComponentPropsWithRef<'div'> {
  /** Activity events */
  events: ActivityEvent[];
  /** Total number of pages */
  totalPages?: number;
  /** Current page (1-based) */
  currentPage?: number;
  /** Called when the page changes */
  onPageChange?: (page: number) => void;
  /** Title (default: 'Activity') */
  title?: string;
  /** Empty state message */
  emptyMessage?: string;
}
