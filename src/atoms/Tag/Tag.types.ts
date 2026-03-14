export const TAG_VARIANTS = ['default', 'primary', 'success', 'warning', 'error'] as const;
export const TAG_SIZES = ['sm', 'md', 'lg'] as const;

export type TagVariant = (typeof TAG_VARIANTS)[number];
export type TagSize = (typeof TAG_SIZES)[number];

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color variant */
  variant?: TagVariant;
  /** Visual size */
  size?: TagSize;
  /** Called when the dismiss button is clicked — renders a dismiss button when provided */
  onDismiss?: () => void;
  /** Accessible label for the dismiss button */
  dismissLabel?: string;
}
