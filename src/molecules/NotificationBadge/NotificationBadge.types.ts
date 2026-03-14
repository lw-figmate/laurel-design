import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface NotificationBadgeProps extends ComponentPropsWithRef<'div'> {
  /** Count to display */
  count?: number;
  /** Max count before showing "N+" */
  max?: number;
  /** Show a dot instead of count */
  dot?: boolean;
  /** Badge color variant */
  variant?: 'primary' | 'error';
  /** The element to badge (e.g. an icon button) */
  children: ReactNode;
}
