import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface SidebarProps extends ComponentPropsWithRef<'aside'> {
  /** Sidebar content (nav links, collapsible sections) */
  children: ReactNode;
  /** Whether the sidebar is collapsed */
  collapsed?: boolean;
  /** Width when expanded (default: '256px') */
  width?: string;
  /** Width when collapsed (default: '64px') */
  collapsedWidth?: string;
  /** Header content (e.g. logo, brand) */
  header?: ReactNode;
  /** Footer content (e.g. user info) */
  footer?: ReactNode;
}

export interface SidebarItemProps extends ComponentPropsWithRef<'a'> {
  /** Icon element */
  icon?: ReactNode;
  /** Item label */
  children: ReactNode;
  /** Active state */
  active?: boolean;
}

export interface SidebarSectionProps extends ComponentPropsWithRef<'div'> {
  /** Section title */
  title?: string;
  /** Section content */
  children: ReactNode;
}
