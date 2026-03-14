import type { ComponentPropsWithRef } from 'react';

export interface NumberInputProps extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  /** Current value */
  value?: number;
  /** Default value (uncontrolled) */
  defaultValue?: number;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Called when value changes */
  onValueChange?: (value: number) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label */
  label?: string;
}
