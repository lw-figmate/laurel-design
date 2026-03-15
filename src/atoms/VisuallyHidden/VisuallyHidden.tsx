import { forwardRef, type ElementType } from 'react';
import type { VisuallyHiddenProps } from './VisuallyHidden.types';

const VisuallyHidden = forwardRef<HTMLElement, VisuallyHiddenProps>(
  ({ as = 'span', children, ...rest }, ref) => {
    const Tag = as as ElementType;
    return (
      <Tag
        ref={ref}
        className="sr-only"
        {...rest}
      >
        {children}
      </Tag>
    );
  },
);

VisuallyHidden.displayName = 'VisuallyHidden';

export { VisuallyHidden };
