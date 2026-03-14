import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import type { AlertProps } from './Alert.types';

const variantClasses: Record<string, { container: string; icon: string }> = {
  info: {
    container: 'border-[var(--laurel-status-info-border)] bg-[var(--laurel-status-info-bg)] text-[var(--laurel-status-info-text)]',
    icon: 'text-[var(--laurel-icon-brand)]',
  },
  success: {
    container: 'border-[var(--laurel-status-success-border)] bg-[var(--laurel-status-success-bg)] text-[var(--laurel-text-primary)]',
    icon: 'text-[var(--laurel-text-success)]',
  },
  warning: {
    container: 'border-[var(--laurel-status-warning-border)] bg-[var(--laurel-status-warning-bg)] text-[var(--laurel-text-primary)]',
    icon: 'text-[var(--laurel-text-warning)]',
  },
  error: {
    container: 'border-[var(--laurel-status-error-border)] bg-[var(--laurel-status-error-bg)] text-[var(--laurel-text-primary)]',
    icon: 'text-[var(--laurel-text-error)]',
  },
};

const iconPaths: Record<string, string> = {
  info: 'M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z',
  success: 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z',
  warning: 'M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
  error: 'M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z',
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'info', title, onDismiss, children, className = '', ...rest }, ref) => {
    const styles = variantClasses[variant];

    return (
      <div
        ref={ref}
        role="alert"
        className={[
          'flex gap-[var(--laurel-space-3)] rounded-[var(--laurel-radius-lg)] border p-[var(--laurel-space-4)]',
          'font-[family-name:var(--laurel-font-sans)]',
          styles.container,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={['h-5 w-5 shrink-0 mt-[var(--laurel-space-0-5)]', styles.icon].join(' ')}
          aria-hidden="true"
        >
          <path fillRule="evenodd" d={iconPaths[variant]} clipRule="evenodd" />
        </svg>

        <div className="flex-1 min-w-0">
          {title && (
            <Text as="strong" size="sm" weight="semibold" className="block mb-[var(--laurel-space-0-5)]">
              {title}
            </Text>
          )}
          <Text as="span" size="sm">
            {children}
          </Text>
        </div>

        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Dismiss"
            className="shrink-0 -m-[var(--laurel-space-1)] p-[var(--laurel-space-1)] rounded-[var(--laurel-radius-md)] hover:bg-[var(--laurel-bg-hover-overlay)] transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        )}
      </div>
    );
  },
);

Alert.displayName = 'Alert';

export { Alert };
