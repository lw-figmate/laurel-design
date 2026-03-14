export const AVATAR_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type AvatarSize = (typeof AVATAR_SIZES)[number];

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image source URL */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Fallback initials (e.g. "JD" for Jane Doe) */
  initials?: string;
  size?: AvatarSize;
}
