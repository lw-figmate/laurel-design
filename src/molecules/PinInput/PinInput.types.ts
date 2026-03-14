import type { ComponentPropsWithRef } from 'react';

export interface PinInputProps extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  /** Number of input fields */
  length?: number;
  /** Current value */
  value?: string;
  /** Called when value changes */
  onValueChange?: (value: string) => void;
  /** Called when all fields are filled */
  onComplete?: (value: string) => void;
  /** Mask input (show dots) */
  mask?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}
