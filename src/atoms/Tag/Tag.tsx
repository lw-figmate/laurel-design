import { forwardRef } from 'react';
import type { TagProps } from './Tag.types';

const variantClasses: Record<string, string> = {
  default: 'bg-[var(--laurel-bg-subtle)] text-[var(--laurel-text-secondary)]',
  primary: 'bg-[var(--laurel-bg-brand-subtle)] text-[var(--laurel-text-brand)]',
  success: 'bg-[var(--laurel-status-success-bg)] text-[var(--laurel-text-success)]',
  warning: 'bg-[var(--laurel-status-warning-bg)] text-[var(--laurel-text-warning)]',
  error: 'bg-[var(--laurel-status-error-bg)] text-[var(--laurel-text-error)]',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-[var(--laurel-space-1-5)] py-[var(--laurel-space-0-5)] text-[length:var(--laurel-font-size-xs)] gap-[var(--laurel-space-0-5)]',
  md: 'px-[var(--laurel-space-2)] py-[var(--laurel-space-0-5)] text-[length:var(--laurel-font-size-sm)] gap-[var(--laurel-space-1)]',
  lg: 'px-[var(--laurel-space-3)] py-[var(--laurel-space-1)] text-[length:var(--laurel-font-size-sm)] gap-[var(--laurel-space-1)]',
};

const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ variant = 'default', size = 'md', onDismiss, dismissLabel = 'Remove', className = '', children, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        className={[
          'inline-flex items-center rounded-[var(--laurel-radius-full)]',
          'font-[family-name:var(--laurel-font-sans)] font-[var(--laurel-font-weight-medium)]',
          variantClasses[variant],
          sizeClasses[size],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {children}
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label={dismissLabel}
            className="inline-flex items-center justify-center rounded-[var(--laurel-radius-full)] hover:bg-[var(--laurel-bg-hover-overlay)] transition-colors cursor-pointer -mr-[var(--laurel-space-0-5)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        )}
      </span>
    );
  },
);

Tag.displayName = 'Tag';

export { Tag };
