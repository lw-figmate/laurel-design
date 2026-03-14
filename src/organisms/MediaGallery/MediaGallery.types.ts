import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface MediaItem {
  /** Unique identifier */
  id: string;
  /** Source URL */
  src: string;
  /** Alt text */
  alt: string;
  /** Media type */
  type?: 'image' | 'video';
  /** Caption */
  caption?: string;
}

export interface MediaGalleryProps extends ComponentPropsWithRef<'div'> {
  /** Media items */
  items: MediaItem[];
  /** Number of columns (default: 3) */
  columns?: number;
  /** Called when an item is clicked */
  onItemClick?: (item: MediaItem) => void;
  /** Custom empty state */
  emptyContent?: ReactNode;
}
