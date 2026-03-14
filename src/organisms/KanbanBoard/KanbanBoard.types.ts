import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface KanbanItem {
  /** Unique identifier */
  id: string;
  /** Card title */
  title: string;
  /** Card description */
  description?: string;
  /** Optional label/tag */
  label?: string;
  /** Assignee avatar element */
  assignee?: ReactNode;
}

export interface KanbanColumn {
  /** Unique column identifier */
  id: string;
  /** Column title */
  title: string;
  /** Items in this column */
  items: KanbanItem[];
}

export interface KanbanBoardProps extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  /** Column definitions with their items */
  columns: KanbanColumn[];
  /** Called when an item is moved between columns */
  onItemMove?: (itemId: string, fromColumnId: string, toColumnId: string) => void;
  /** Called when add button is clicked in a column */
  onAddItem?: (columnId: string) => void;
}
