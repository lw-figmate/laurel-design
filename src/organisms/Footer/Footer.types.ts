import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface FooterColumn {
  /** Column heading */
  title: string;
  /** Links in the column */
  links: { label: string; href: string }[];
}

export interface FooterProps extends ComponentPropsWithRef<'footer'> {
  /** Column link groups */
  columns?: FooterColumn[];
  /** Logo or brand element */
  logo?: ReactNode;
  /** Copyright text */
  copyright?: string;
  /** Bottom row content (e.g. social links) */
  bottomContent?: ReactNode;
}
