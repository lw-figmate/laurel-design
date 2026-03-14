import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface PageHeaderBreadcrumb {
  /** Breadcrumb label */
  label: string;
  /** Breadcrumb href */
  href?: string;
}

export interface PageHeaderProps extends ComponentPropsWithRef<'div'> {
  /** Page title */
  title: string;
  /** Page description */
  description?: string;
  /** Breadcrumb items */
  breadcrumbs?: PageHeaderBreadcrumb[];
  /** Actions area (buttons, menus) */
  actions?: ReactNode;
}
