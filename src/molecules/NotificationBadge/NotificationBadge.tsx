import { forwardRef } from 'react';
import type { NotificationBadgeProps } from './NotificationBadge.types';

const variantClasses: Record<string, string> = {
  primary: 'bg-[var(--laurel-bg-brand)] text-[var(--laurel-text-on-brand)]',
  error: 'bg-[var(--laurel-bg-danger)] text-[var(--laurel-text-on-brand)]',
};

const NotificationBadge = forwardRef<HTMLDivElement, NotificationBadgeProps>(
  ({ count, max = 99, dot = false, variant = 'error', children, className = '', ...rest }, ref) => {
    const showBadge = dot || (count != null && count > 0);
    const displayText = count != null && count > max ? `${max}+` : count;

    return (
      <div ref={ref} className={['relative inline-flex', className].filter(Boolean).join(' ')} {...rest}>
        {children}
        {showBadge && (
          <span
            className={[
              'absolute -top-1 -right-1 flex items-center justify-center rounded-full font-[family-name:var(--laurel-font-sans)]',
              variantClasses[variant],
              dot
                ? 'h-2.5 w-2.5'
                : 'min-w-5 h-5 px-[var(--laurel-space-1)] text-[length:var(--laurel-font-size-xs)] font-[var(--laurel-font-weight-semibold)]',
            ].join(' ')}
            aria-label={dot ? 'New notification' : `${count} notifications`}
          >
            {!dot && displayText}
          </span>
        )}
      </div>
    );
  },
);

NotificationBadge.displayName = 'NotificationBadge';

export { NotificationBadge };
