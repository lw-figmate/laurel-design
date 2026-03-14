import type { ComponentPropsWithRef } from 'react';

export interface DatePickerProps extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  /** Selected date */
  value?: Date;
  /** Called when date changes */
  onValueChange?: (date: Date | undefined) => void;
  /** Placeholder text for input */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Earliest selectable date */
  min?: Date;
  /** Latest selectable date */
  max?: Date;
}
