import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface CarouselProps extends ComponentPropsWithRef<'div'> {
  /** Slides */
  children: ReactNode;
  /** Auto-play interval */
  autoPlay?: boolean;
  /** Interval between slides in ms */
  interval?: number;
  /** Show dot indicators */
  showDots?: boolean;
  /** Show prev/next arrows */
  showArrows?: boolean;
}
