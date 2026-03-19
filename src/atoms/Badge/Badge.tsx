import { forwardRef } from 'react';
import type { BadgeProps } from './Badge.types';

const styleVariantClasses: Record<string, Record<string, string>> = {
  subtle: {
    default:
      'bg-[var(--laurel-bg-subtle)] text-[var(--laurel-text-secondary)]',
    neutral:
      'bg-[var(--laurel-bg-accent)] text-[var(--laurel-text-primary)]',
    primary:
      'bg-[var(--laurel-bg-brand-subtle)] text-[var(--laurel-text-brand-strong)]',
    success:
      'bg-[var(--laurel-status-success-bg)] text-[var(--laurel-text-success)]',
    warning:
      'bg-[var(--laurel-status-warning-bg)] text-[var(--laurel-text-warning)]',
    error:
      'bg-[var(--laurel-status-error-bg)] text-[var(--laurel-text-error)]',
  },
  solid: {
    default:
      'bg-[var(--laurel-icon-muted)] text-[var(--laurel-ring-on-surface)]',
    neutral:
      'bg-[var(--laurel-text-tertiary)] text-[var(--laurel-ring-on-surface)]',
    primary:
      'bg-[var(--laurel-border-brand)] text-[var(--laurel-ring-on-surface)]',
    success:
      'bg-[var(--laurel-status-success-icon)] text-[var(--laurel-ring-on-surface)]',
    warning:
      'bg-[var(--laurel-status-info-icon)] text-[var(--laurel-ring-on-surface)]',
    error:
      'bg-[var(--laurel-status-error-text)] text-[var(--laurel-ring-on-surface)]',
  },
  outline: {
    default:
      'border border-[var(--laurel-ring-neutral)] text-[var(--laurel-icon-muted)]',
    neutral:
      'border border-[var(--laurel-text-tertiary)] text-[var(--laurel-text-tertiary)]',
    primary:
      'border border-[var(--laurel-border-brand)] text-[var(--laurel-status-info-text)]',
    success:
      'border border-[var(--laurel-status-success-icon)] text-[var(--laurel-status-success-icon)]',
    warning:
      'border border-[var(--laurel-status-info-icon)] text-[var(--laurel-bg-brand-hover)]',
    error:
      'border border-[var(--laurel-status-error-text)] text-[var(--laurel-status-error-text)]',
  },
};

const sizeClasses: Record<string, string> = {
  sm: 'px-[var(--laurel-space-1-5)] py-[var(--laurel-space-0-5)] text-[length:var(--laurel-font-size-xs)]',
  md: 'px-[var(--laurel-space-2)] py-[var(--laurel-space-0-5)] text-[length:var(--laurel-font-size-sm)]',
  lg: 'px-[var(--laurel-space-3)] py-[var(--laurel-space-1)] text-[length:var(--laurel-font-size-sm)]',
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', badgeStyle = 'subtle', className = '', children, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        className={[
          'inline-flex items-center rounded-[var(--laurel-radius-full)]',
          'font-[var(--laurel-font-weight-medium)] leading-none',
          styleVariantClasses[badgeStyle]?.[variant],
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
