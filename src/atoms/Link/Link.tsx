import { forwardRef } from 'react';
import type { LinkProps } from './Link.types';

const variantClasses: Record<string, string> = {
  default:
    'text-[var(--laurel-text-brand)] hover:text-[var(--laurel-text-brand)] underline underline-offset-2',
  subtle:
    'text-[var(--laurel-text-tertiary)] hover:text-[var(--laurel-text-primary)] hover:underline underline-offset-2',
};

const sizeClasses: Record<string, string> = {
  sm: 'text-[length:var(--laurel-font-size-sm)]',
  md: 'text-[length:var(--laurel-font-size-base)]',
  lg: 'text-[length:var(--laurel-font-size-lg)]',
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = 'default', size = 'md', external = false, disabled = false, className = '', children, ...rest }, ref) => {
    return (
      <a
        ref={ref}
        className={[
          'font-[family-name:var(--laurel-font-sans)] transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[var(--laurel-ring-brand)] rounded-[var(--laurel-radius-sm)]',
          disabled
            ? 'pointer-events-none opacity-50 cursor-not-allowed'
            : 'cursor-pointer',
          variantClasses[variant],
          sizeClasses[size],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  },
);

Link.displayName = 'Link';

export { Link };
