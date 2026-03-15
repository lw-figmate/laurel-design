import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface AccordionProps extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  /** Allow multiple items open at once */
  multiple?: boolean;
  /** Controlled open items (array of values) */
  value?: string[];
  /** Default open items (uncontrolled) */
  defaultValue?: string[];
  /** Called when open items change */
  onValueChange?: (value: string[]) => void;
}

export interface AccordionItemProps extends Omit<ComponentPropsWithRef<'div'>, 'title'> {
  /** Unique value identifying this item */
  value: string;
  /** Trigger label */
  title: ReactNode;
  /** Whether disabled */
  disabled?: boolean;
}
