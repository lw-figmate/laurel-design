import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface CollapsibleProps extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  /** Trigger label */
  trigger: ReactNode;
  /** Whether open (controlled) */
  open?: boolean;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean;
  /** Called when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Collapsible content */
  children: ReactNode;
}
