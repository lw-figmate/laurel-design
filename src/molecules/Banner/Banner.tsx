import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import type { BannerProps } from './Banner.types';

const variantClasses: Record<string, string> = {
  info: 'bg-[var(--laurel-bg-brand)] text-[var(--laurel-text-on-brand)]',
  success: 'bg-[var(--laurel-bg-success)] text-[var(--laurel-text-on-brand)]',
  warning: 'bg-[var(--laurel-bg-warning)] text-[var(--laurel-text-heading)]',
  error: 'bg-[var(--laurel-bg-danger)] text-[var(--laurel-text-on-brand)]',
};

const Banner = forwardRef<HTMLDivElement, BannerProps>(
  ({ variant = 'info', children, action, onDismiss, className = '', ...rest }, ref) => {
    return (
      <div
        ref={ref}
        role="banner"
        className={[
          'flex items-center justify-center gap-[var(--laurel-space-3)] px-[var(--laurel-space-4)] py-[var(--laurel-space-3)]',
          'font-[family-name:var(--laurel-font-sans)]',
          variantClasses[variant],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        <Text as="span" size="sm" className="text-inherit">
          {children}
        </Text>

        {action && <div className="shrink-0">{action}</div>}

        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Dismiss"
            className="shrink-0 rounded-[var(--laurel-radius-md)] p-[var(--laurel-space-0-5)] hover:bg-[var(--laurel-bg-hover-on-elevated-strong)] transition-colors cursor-pointer ml-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        )}
      </div>
    );
  },
);

Banner.displayName = 'Banner';

export { Banner };
