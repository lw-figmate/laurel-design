import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface StatDashboardItem {
  /** Stat label */
  label: string;
  /** Stat value */
  value: ReactNode;
  /** Help text or delta */
  helpText?: ReactNode;
  /** Trend direction */
  trend?: 'up' | 'down';
  /** Icon element */
  icon?: ReactNode;
}

export interface StatDashboardProps extends ComponentPropsWithRef<'div'> {
  /** Stat items */
  stats: StatDashboardItem[];
  /** Number of columns (default: 4) */
  columns?: number;
  /** Dashboard title */
  title?: string;
}
