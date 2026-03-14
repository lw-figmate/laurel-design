import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface HoverCardProps extends ComponentPropsWithRef<'div'> {
  /** Element that triggers the hover card */
  trigger: ReactNode;
  /** Card content */
  children: ReactNode;
  /** Delay before opening (ms) */
  openDelay?: number;
  /** Delay before closing (ms) */
  closeDelay?: number;
}
