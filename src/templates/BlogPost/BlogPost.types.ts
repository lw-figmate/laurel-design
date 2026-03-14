import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface BlogPostProps extends ComponentPropsWithRef<'article'> {
  /** Post title */
  title: string;
  /** Author name */
  author: string;
  /** Author avatar element */
  authorAvatar?: ReactNode;
  /** Published date string */
  date: string;
  /** Reading time (e.g. '5 min read') */
  readingTime?: string;
  /** Cover image URL */
  coverImage?: string;
  /** Cover image alt text */
  coverImageAlt?: string;
  /** Post body content */
  children: ReactNode;
  /** Tags list */
  tags?: string[];
  /** Related posts sidebar */
  relatedPosts?: ReactNode;
  /** Share actions */
  shareActions?: ReactNode;
  /** Back link URL */
  backHref?: string;
}
