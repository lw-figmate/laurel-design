import { forwardRef } from 'react';
import type { ButtonProps } from './Button.types';

const variantClasses: Record<string, string> = {
  primary:
    'bg-[var(--laurel-bg-brand)] text-[var(--laurel-text-on-brand)] hover:bg-[var(--laurel-bg-brand-hover)] focus-visible:ring-[var(--laurel-ring-brand)]',
  secondary:
    'border border-[var(--laurel-border-default)] bg-[var(--laurel-bg-surface)] text-[var(--laurel-text-primary)] hover:bg-[var(--laurel-bg-subtle)] focus-visible:ring-[var(--laurel-ring-neutral)]',
  ghost:
    'bg-transparent text-[var(--laurel-text-secondary)] hover:bg-[var(--laurel-bg-subtle)] focus-visible:ring-[var(--laurel-ring-neutral)]',
  danger:
    'bg-[var(--laurel-bg-danger)] text-[var(--laurel-text-on-brand)] hover:bg-[var(--laurel-bg-danger-hover)] focus-visible:ring-[var(--laurel-ring-error)]',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-[var(--laurel-space-3)] py-[var(--laurel-space-1)] text-[length:var(--laurel-font-size-sm)]',
  md: 'px-[var(--laurel-space-4)] py-[var(--laurel-space-2)] text-[length:var(--laurel-font-size-base)]',
  lg: 'px-[var(--laurel-space-6)] py-[var(--laurel-space-3)] text-[length:var(--laurel-font-size-lg)]',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', disabled, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={[
          'inline-flex items-center justify-center font-[var(--laurel-font-weight-medium)]',
          'rounded-[var(--laurel-radius-md)] transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          variantClasses[variant],
          sizeClasses[size],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
