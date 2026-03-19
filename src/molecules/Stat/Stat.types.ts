import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface StatProps extends ComponentPropsWithRef<'div'> {
  /** Label describing the stat */
  label: string;
  /** The stat value */
  value: ReactNode;
  /** Optional helper text or delta */
  helpText?: ReactNode;
  /** Trend direction (shows arrow icon) */
  trend?: 'up' | 'down' | 'none';
  /** Icon to display */
  icon?: ReactNode;
}
