import { forwardRef } from 'react';
import type { LabelProps } from './Label.types';

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ required, disabled, className = '', children, ...rest }, ref) => {
    return (
      <label
        ref={ref}
        className={[
          'flex items-center gap-[var(--laurel-space-1)]',
          'text-[length:var(--laurel-font-size-sm)] font-[var(--laurel-font-weight-medium)]',
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
