import { forwardRef } from 'react';
import type { SelectProps } from './Select.types';

const sizeClasses: Record<string, string> = {
  sm: 'px-[var(--laurel-space-2)] py-[var(--laurel-space-1)] text-[length:var(--laurel-font-size-sm)] pr-[var(--laurel-space-8)]',
  md: 'px-[var(--laurel-space-3)] py-[var(--laurel-space-2)] text-[length:var(--laurel-font-size-base)] pr-[var(--laurel-space-10)]',
  lg: 'px-[var(--laurel-space-4)] py-[var(--laurel-space-3)] text-[length:var(--laurel-font-size-lg)] pr-[var(--laurel-space-12)]',
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ selectSize = 'md', error = false, disabled, placeholder, children, className = '', ...rest }, ref) => {
    return (
      <select
        ref={ref}
        disabled={disabled}
        className={[
          'w-full appearance-none rounded-[var(--laurel-radius-md)] border bg-[var(--laurel-bg-surface)]',
          'font-[family-name:var(--laurel-font-sans)] text-[var(--laurel-text-primary)]',
          'transition-colors cursor-pointer',
          'focus:outline-none focus:ring-2 focus:ring-offset-1',
          'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--laurel-bg-subtle)]',
          'bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%236b7280%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.22%208.22a.75.75%200%200%201%201.06%200L10%2011.94l3.72-3.72a.75.75%200%201%201%201.06%201.06l-4.25%204.25a.75.75%200%200%201-1.06%200L5.22%209.28a.75.75%200%200%201%200-1.06Z%22%20clip-rule%3D%22evenodd%22/%3E%3C/svg%3E")]',
          'bg-[length:1.25rem_1.25rem] bg-[position:right_0.5rem_center] bg-no-repeat',
          error
            ? 'border-[var(--laurel-border-error)] focus:ring-[var(--laurel-ring-error)]'
            : 'border-[var(--laurel-border-default)] focus:ring-[var(--laurel-ring-brand)]',
          sizeClasses[selectSize],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        aria-invalid={error || undefined}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {children}
      </select>
    );
  },
);

Select.displayName = 'Select';

export { Select };
