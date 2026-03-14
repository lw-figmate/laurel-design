import { forwardRef } from 'react';
import type { DividerProps } from './Divider.types';

const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = 'horizontal', className = '', ...rest }, ref) => {
    const isVertical = orientation === 'vertical';

    return (
      <hr
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={[
          'border-none m-0 shrink-0 bg-[var(--laurel-bg-accent)]',
          isVertical ? 'w-px self-stretch' : 'h-px w-full',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      />
    );
  },
);

Divider.displayName = 'Divider';

export { Divider };
