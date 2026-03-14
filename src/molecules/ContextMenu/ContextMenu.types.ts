import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ContextMenuProps extends ComponentPropsWithRef<'div'> {
  /** The element that triggers the context menu on right-click */
  children: ReactNode;
  /** Menu items */
  items: ContextMenuItem[];
}

export interface ContextMenuItem {
  /** Item label */
  label: string;
  /** Click handler */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Render as separator */
  separator?: boolean;
}
