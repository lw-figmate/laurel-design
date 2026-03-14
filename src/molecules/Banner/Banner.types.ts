import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface BannerProps extends ComponentPropsWithRef<'div'> {
  /** Variant */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /** Banner content */
  children: ReactNode;
  /** Optional action (e.g. a button or link) */
  action?: ReactNode;
  /** Called when dismiss is clicked */
  onDismiss?: () => void;
}
