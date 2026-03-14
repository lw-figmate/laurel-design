import type { ComponentPropsWithRef } from 'react';

export interface SliderProps extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
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
  /** Accessible label */
  label?: string;
  /** Show value label */
  showValue?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}
