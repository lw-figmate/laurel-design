import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface CardGridProps extends ComponentPropsWithRef<'div'> {
  /** Card items */
  children: ReactNode;
  /** Minimum card width for auto-fill grid (default: '280px') */
  minCardWidth?: string;
  /** Gap between cards (design token key, default: 'var(--laurel-space-6)') */
  gap?: string;
  /** Content shown when no children */
  emptyState?: ReactNode;
}
