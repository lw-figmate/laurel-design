export const BADGE_VARIANTS = ['default', 'neutral', 'primary', 'success', 'warning', 'error'] as const;
export const BADGE_SIZES = ['sm', 'md', 'lg'] as const;
export const BADGE_STYLES = ['subtle', 'solid', 'outline'] as const;

export type BadgeVariant = (typeof BADGE_VARIANTS)[number];
export type BadgeSize = (typeof BADGE_SIZES)[number];
export type BadgeStyle = (typeof BADGE_STYLES)[number];

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color variant */
  variant?: BadgeVariant;
  /** Size of the badge */
  size?: BadgeSize;
  /** Visual style */
  badgeStyle?: BadgeStyle;
}
