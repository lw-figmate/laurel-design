import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ErrorPageProps extends ComponentPropsWithRef<'div'> {
  /** Error code (e.g. 404, 500) */
  code?: number | string;
  /** Error title */
  title: string;
  /** Error description */
  description?: string;
  /** Illustration or icon element */
  illustration?: ReactNode;
  /** Primary action (e.g. "Go home") */
  action?: ReactNode;
  /** Secondary action (e.g. "Go back") */
  secondaryAction?: ReactNode;
  /** Show optional support link */
  supportHref?: string;
}
