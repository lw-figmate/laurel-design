import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface PageLayoutProps extends ComponentPropsWithRef<'div'> {
  /** Header element */
  header?: ReactNode;
  /** Sidebar element */
  sidebar?: ReactNode;
  /** Footer element */
  footer?: ReactNode;
  /** Main content */
  children: ReactNode;
  /** Whether sidebar is collapsed */
  sidebarCollapsed?: boolean;
  /** Max width of the content area (default: none) */
  maxWidth?: string;
}
