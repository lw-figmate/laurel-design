import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface DropdownMenuProps extends ComponentPropsWithRef<'div'> {
  /** Element that opens the menu */
  trigger: ReactNode;
  /** Menu content (DropdownMenuItem, DropdownMenuSeparator) */
  children: ReactNode;
  /** Menu alignment relative to trigger */
  align?: 'start' | 'end';
}

export interface DropdownMenuItemProps extends ComponentPropsWithRef<'button'> {
  /** Disabled state */
  disabled?: boolean;
  /** Item content */
  children: ReactNode;
}

export interface DropdownMenuSeparatorProps extends ComponentPropsWithRef<'div'> {}
