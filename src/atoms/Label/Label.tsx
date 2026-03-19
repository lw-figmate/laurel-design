import { forwardRef } from 'react';
import type { LabelProps } from './Label.types';

const sizeClasses: Record<string, string> = {
  sm: 'text-[length:var(--laurel-font-size-xs)]',
  md: 'text-[length:var(--laurel-font-size-sm)]',
  lg: 'text-[length:var(--laurel-font-size-base)]',
};

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ required, disabled, size = 'md', className = '', children, ...rest }, ref) => {
    return (
      <label
        ref={ref}
        className={[
          'flex items-center gap-[var(--laurel-space-1)]',
          'font-[var(--laurel-font-weight-medium)]',
          sizeClasses[size],
          disabled
            ? 'text-[var(--laurel-text-placeholder)] cursor-not-allowed'
            : 'text-[var(--laurel-text-secondary)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {children}
        {required && (
          <span aria-hidden="true" className="text-[var(--laurel-icon-error)]">
            *
          </span>
        )}
      </label>
    );
  },
);

Label.displayName = 'Label';

export { Label };
