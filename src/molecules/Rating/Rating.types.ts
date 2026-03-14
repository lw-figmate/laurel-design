import type { ComponentPropsWithRef } from 'react';

export interface RatingProps extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  /** Current value */
  value?: number;
  /** Default value (uncontrolled) */
  defaultValue?: number;
  /** Maximum number of stars */
  max?: number;
  /** Called when value changes */
  onValueChange?: (value: number) => void;
  /** Prevent interaction */
  readonly?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}
