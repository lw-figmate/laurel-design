export const BADGE_VARIANTS = ['default', 'primary', 'success', 'warning', 'error'] as const;
export const BADGE_SIZES = ['sm', 'md', 'lg'] as const;

export type BadgeVariant = (typeof BADGE_VARIANTS)[number];
export type BadgeSize = (typeof BADGE_SIZES)[number];

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color variant */
  variant?: BadgeVariant;
  /** Size of the badge */
  size?: BadgeSize;
}
