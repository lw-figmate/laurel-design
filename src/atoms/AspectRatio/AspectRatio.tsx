import { forwardRef } from 'react';
import type { AspectRatioProps } from './AspectRatio.types';

const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 1, className = '', children, style, ...rest }, ref) => (
    <div
      ref={ref}
      className={['relative overflow-hidden', className].filter(Boolean).join(' ')}
      style={{ aspectRatio: String(ratio), ...style }}
      {...rest}
    >
      {children}
    </div>
  ),
);

AspectRatio.displayName = 'AspectRatio';

export { AspectRatio };
