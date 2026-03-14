import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ProfileCardStat {
  /** Stat label */
  label: string;
  /** Stat value */
  value: string | number;
}

export interface ProfileCardProps extends ComponentPropsWithRef<'div'> {
  /** Avatar image URL */
  avatarSrc?: string;
  /** Avatar initials fallback */
  initials?: string;
  /** User name */
  name: string;
  /** User role or title */
  role?: string;
  /** Bio or description */
  bio?: string;
  /** Profile stats */
  stats?: ProfileCardStat[];
  /** Action buttons */
  actions?: ReactNode;
}
