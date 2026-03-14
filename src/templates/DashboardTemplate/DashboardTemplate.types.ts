import type { ComponentPropsWithRef, ReactNode } from 'react';
import type { StatDashboardItem } from '../../organisms/StatDashboard';

export interface DashboardTemplateProps extends ComponentPropsWithRef<'div'> {
  /** Page title */
  title: string;
  /** Stat items for the top row */
  stats?: StatDashboardItem[];
  /** Header actions (e.g. date picker, export button) */
  actions?: ReactNode;
  /** Main content / widgets area */
  children: ReactNode;
  /** Sidebar content (e.g. activity log) */
  sidebar?: ReactNode;
  /** Breadcrumb items */
  breadcrumbs?: Array<{ label: string; href?: string }>;
}
