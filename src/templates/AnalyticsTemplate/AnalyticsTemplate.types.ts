import type { ComponentPropsWithRef, ReactNode } from 'react';
import type { StatDashboardItem } from '../../organisms/StatDashboard';

export interface AnalyticsChart {
  /** Chart title */
  title: string;
  /** Chart element */
  content: ReactNode;
  /** Column span (1–3, default: 1) */
  span?: number;
}

export interface AnalyticsTemplateProps extends ComponentPropsWithRef<'div'> {
  /** Page title */
  title: string;
  /** Summary stats for the top row */
  stats?: StatDashboardItem[];
  /** Chart sections */
  charts: AnalyticsChart[];
  /** Filter / date-range controls */
  filters?: ReactNode;
  /** Breadcrumb items */
  breadcrumbs?: Array<{ label: string; href?: string }>;
}
