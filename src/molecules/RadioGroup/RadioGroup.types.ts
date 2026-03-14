import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface RadioGroupProps extends Omit<ComponentPropsWithRef<'fieldset'>, 'onChange'> {
  /** Group label */
  label?: string;
  /** Radio group name */
  name: string;
  /** Currently selected value */
  value?: string;
  /** Default selected value (uncontrolled) */
  defaultValue?: string;
  /** Called when selection changes */
  onValueChange?: (value: string) => void;
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Error message */
  error?: string;
  /** Radio items */
  children: ReactNode;
}
