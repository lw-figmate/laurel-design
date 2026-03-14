import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface NavigationMenuProps extends ComponentPropsWithRef<'nav'> {
  /** Navigation items */
  children: ReactNode;
}

export interface NavigationMenuItemProps extends ComponentPropsWithRef<'div'> {
  /** Trigger label or element */
  trigger: ReactNode;
  /** Dropdown content (optional — omit for plain link) */
  children?: ReactNode;
}

export interface NavigationMenuLinkProps extends ComponentPropsWithRef<'a'> {
  /** Whether this link is active */
  active?: boolean;
  /** Link content */
  children: ReactNode;
}
