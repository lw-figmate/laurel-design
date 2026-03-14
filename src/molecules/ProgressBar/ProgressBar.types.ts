import type { ComponentPropsWithRef } from 'react';

export interface ProgressBarProps extends ComponentPropsWithRef<'div'> {
  /** Current value (0–100) */
  value: number;
  /** Maximum value */
  max?: number;
  /** Accessible label */
  label?: string;
  /** Show percentage text */
  showValue?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Color variant */
  variant?: 'primary' | 'success' | 'warning' | 'error';
}
