import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface HeaderProps extends ComponentPropsWithRef<'header'> {
  /** Logo element or text */
  logo: ReactNode;
  /** Navigation items */
  nav?: ReactNode;
  /** Actions area (e.g. search, avatar, buttons) */
  actions?: ReactNode;
  /** Sticky positioning */
  sticky?: boolean;
}
