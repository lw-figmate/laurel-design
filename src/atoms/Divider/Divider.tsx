import { forwardRef } from 'react';
import type { DividerProps } from './Divider.types';

const variantClasses: Record<string, string> = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
};

const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = 'horizontal', variant = 'solid', className = '', ...rest }, ref) => {
    const isVertical = orientation === 'vertical';

    return (
      <hr
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={[
          'border-0 m-0 shrink-0 border-[var(--laurel-bg-accent)]',
          variantClasses[variant],
          isVertical ? 'border-l self-stretch' : 'border-t w-full',
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
