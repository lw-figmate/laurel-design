export const AVATAR_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export const AVATAR_SHAPES = ['circle', 'square'] as const;

export type AvatarSize = (typeof AVATAR_SIZES)[number];
export type AvatarShape = (typeof AVATAR_SHAPES)[number];

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image source URL */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Fallback initials (e.g. "JD" for Jane Doe) */
  initials?: string;
  size?: AvatarSize;
  /** Shape of the avatar */
  shape?: AvatarShape;
}
