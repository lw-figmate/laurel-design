import { forwardRef } from 'react';
import type { BadgeProps } from './Badge.types';

const variantClasses: Record<string, string> = {
  default:
    'bg-[var(--laurel-bg-subtle)] text-[var(--laurel-text-secondary)]',
  primary:
    'bg-[var(--laurel-bg-brand-subtle)] text-[var(--laurel-text-brand-strong)]',
  success:
    'bg-[var(--laurel-status-success-bg)] text-[var(--laurel-text-success)]',
  warning:
    'bg-[var(--laurel-status-warning-bg)] text-[var(--laurel-text-warning)]',
  error:
    'bg-[var(--laurel-status-error-bg)] text-[var(--laurel-text-error)]',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-[var(--laurel-space-1-5)] py-[var(--laurel-space-0-5)] text-[length:var(--laurel-font-size-xs)]',
  md: 'px-[var(--laurel-space-2)] py-[var(--laurel-space-0-5)] text-[length:var(--laurel-font-size-sm)]',
  lg: 'px-[var(--laurel-space-3)] py-[var(--laurel-space-1)] text-[length:var(--laurel-font-size-sm)]',
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', className = '', children, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        className={[
          'inline-flex items-center rounded-[var(--laurel-radius-full)]',
          'font-[var(--laurel-font-weight-medium)] leading-none',
          variantClasses[variant],
          sizeClasses[size],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = 'Badge';

export { Badge };
