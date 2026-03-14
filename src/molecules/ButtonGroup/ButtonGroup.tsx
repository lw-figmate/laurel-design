import { forwardRef } from 'react';
import type { ButtonGroupProps } from './ButtonGroup.types';

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ vertical = false, className = '', children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        className={[
          'inline-flex',
          vertical ? 'flex-col' : 'flex-row',
          'gap-[var(--laurel-space-2)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
