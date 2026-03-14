import { forwardRef } from 'react';
import type { InputGroupProps } from './InputGroup.types';

const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ prefix, suffix, children, className = '', ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          'flex items-center rounded-[var(--laurel-radius-md)] border border-[var(--laurel-border-default)]',
          'bg-[var(--laurel-bg-surface)]',
          'focus-within:ring-2 focus-within:ring-offset-1 focus-within:ring-[var(--laurel-ring-brand)]',
          'font-[family-name:var(--laurel-font-sans)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {prefix && (
          <span className="flex items-center shrink-0 pl-[var(--laurel-space-3)] text-[var(--laurel-text-muted)] text-[length:var(--laurel-font-size-sm)]">
            {prefix}
          </span>
        )}
        <div className="flex-1 min-w-0 [&_input]:border-0 [&_input]:ring-0 [&_input]:focus:ring-0 [&_input]:focus:outline-none">
          {children}
        </div>
        {suffix && (
          <span className="flex items-center shrink-0 pr-[var(--laurel-space-3)] text-[var(--laurel-text-muted)] text-[length:var(--laurel-font-size-sm)]">
            {suffix}
          </span>
        )}
      </div>
    );
  },
);

InputGroup.displayName = 'InputGroup';

export { InputGroup };
