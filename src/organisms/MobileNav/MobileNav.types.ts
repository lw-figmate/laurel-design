import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface MobileNavLink {
  /** Link label */
  label: string;
  /** Link href */
  href: string;
  /** Optional icon */
  icon?: ReactNode;
  /** Whether this link is active */
  active?: boolean;
}

export interface MobileNavProps extends ComponentPropsWithRef<'div'> {
  /** Navigation links */
  links: MobileNavLink[];
  /** Called when a link is clicked */
  onLinkClick?: (href: string) => void;
  /** Header content (logo, brand) */
  header?: ReactNode;
  /** Footer content inside the drawer */
  footer?: ReactNode;
}
