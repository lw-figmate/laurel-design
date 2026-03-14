export const LINK_VARIANTS = ['default', 'subtle'] as const;

export type LinkVariant = (typeof LINK_VARIANTS)[number];

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Visual style variant */
  variant?: LinkVariant;
  /** Opens in a new tab with secure rel attributes */
  external?: boolean;
  /** Visually and functionally disable the link */
  disabled?: boolean;
}
