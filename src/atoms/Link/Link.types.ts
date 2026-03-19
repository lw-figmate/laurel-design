export const LINK_VARIANTS = ['default', 'subtle'] as const;
export const LINK_SIZES = ['sm', 'md', 'lg'] as const;

export type LinkVariant = (typeof LINK_VARIANTS)[number];
export type LinkSize = (typeof LINK_SIZES)[number];

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Visual style variant */
  variant?: LinkVariant;
  /** Size of the link text */
  size?: LinkSize;
  /** Opens in a new tab with secure rel attributes */
  external?: boolean;
  /** Visually and functionally disable the link */
  disabled?: boolean;
}
