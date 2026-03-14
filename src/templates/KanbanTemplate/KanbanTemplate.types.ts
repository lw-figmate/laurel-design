import type { ComponentPropsWithRef, ReactNode } from 'react';
import type { KanbanColumn } from '../../organisms/KanbanBoard';

export interface KanbanTemplateProps extends ComponentPropsWithRef<'div'> {
  /** Page title */
  title: string;
  /** Kanban columns with items */
  columns: KanbanColumn[];
  /** Called when an item is moved between columns */
  onItemMove?: (itemId: string, fromColumn: string, toColumn: string) => void;
  /** Toolbar / filter content */
  toolbar?: ReactNode;
  /** Primary action (e.g. "New task") */
  primaryAction?: ReactNode;
  /** Breadcrumb items */
  breadcrumbs?: Array<{ label: string; href?: string }>;
}
