import { forwardRef, useRef, useEffect } from 'react';
import type { CheckboxProps } from './Checkbox.types';

const sizeClasses: Record<string, string> = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checkboxSize = 'md', indeterminate = false, disabled, className = '', ...rest }, ref) => {
    const internalRef = useRef<HTMLInputElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLInputElement>) ?? internalRef;

    useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, resolvedRef]);

    return (
      <input
        ref={resolvedRef}
        type="checkbox"
        disabled={disabled}
        className={[
          sizeClasses[checkboxSize],
          'rounded-[var(--laurel-radius-sm)] border-[var(--laurel-border-default)]',
          'text-[var(--laurel-text-brand)]',
          'transition-colors cursor-pointer',
          'focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[var(--laurel-ring-brand)]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      />
    );
  },
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
