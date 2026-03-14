import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface DrawerProps extends ComponentPropsWithoutRef<'div'> {
  /** Whether the drawer is open */
  open: boolean;
  /** Called when the drawer should close */
  onClose: () => void;
  /** Side the drawer slides from */
  placement?: 'left' | 'right';
  /** Title shown in the drawer header */
  title?: string;
  /** Drawer content */
  children: ReactNode;
}
