import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ProfileTemplateProps extends ComponentPropsWithRef<'div'> {
  /** User name */
  name: string;
  /** User avatar element */
  avatar?: ReactNode;
  /** User bio or subtitle */
  bio?: string;
  /** Cover / banner image URL */
  coverImage?: string;
  /** Profile stats (e.g. followers, posts) */
  stats?: Array<{ label: string; value: string | number }>;
  /** Action buttons (e.g. Edit Profile, Follow) */
  actions?: ReactNode;
  /** Tabbed content area */
  children: ReactNode;
  /** Tab items */
  tabs?: Array<{ label: string; id: string }>;
  /** Active tab ID */
  activeTab?: string;
  /** Tab change handler */
  onTabChange?: (tabId: string) => void;
}
