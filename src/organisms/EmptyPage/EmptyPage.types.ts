import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface EmptyPageProps extends ComponentPropsWithRef<'div'> {
  /** Illustration or icon element */
  illustration?: ReactNode;
  /** Page title */
  title: string;
  /** Supporting description */
  description?: string;
  /** Primary action button */
  action?: ReactNode;
  /** Secondary action */
  secondaryAction?: ReactNode;
}
