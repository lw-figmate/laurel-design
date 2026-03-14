import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface FeedItem {
  /** Unique identifier */
  id: string;
  /** Author name */
  author: string;
  /** Author avatar URL */
  avatarSrc?: string;
  /** Author initials fallback */
  avatarInitials?: string;
  /** Timestamp/date string */
  timestamp: string;
  /** Content body */
  content: ReactNode;
  /** Optional actions (like, reply, share) */
  actions?: ReactNode;
}

export interface FeedProps extends Omit<ComponentPropsWithRef<'div'>, 'children'> {
  /** Feed items */
  items: FeedItem[];
  /** Rows per page (enables pagination when set) */
  pageSize?: number;
  /** Content shown when no items */
  emptyState?: ReactNode;
}
