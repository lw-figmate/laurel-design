import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface CheckboxGroupProps extends ComponentPropsWithRef<'fieldset'> {
  /** Group label */
  label?: string;
  /** Currently checked values */
  value?: string[];
  /** Default checked values (uncontrolled) */
  defaultValue?: string[];
  /** Called when checked values change */
  onValueChange?: (value: string[]) => void;
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Error message */
  error?: string;
  /** Checkbox items */
  children: ReactNode;
}
