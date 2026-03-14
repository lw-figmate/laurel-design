import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import type { EmptyStateProps } from './EmptyState.types';

const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ icon, title, description, action, className = '', ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          'flex flex-col items-center justify-center text-center py-[var(--laurel-space-12)] px-[var(--laurel-space-6)]',
          'font-[family-name:var(--laurel-font-sans)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {icon && (
          <div className="mb-[var(--laurel-space-4)] text-[var(--laurel-text-placeholder)]">
            {icon}
          </div>
        )}
        <Text as="strong" size="lg" weight="semibold" className="text-[var(--laurel-text-primary)]">
          {title}
        </Text>
        {description && (
          <Text as="p" size="sm" className="mt-[var(--laurel-space-1)] text-[var(--laurel-text-muted)] max-w-sm">
            {description}
          </Text>
        )}
        {action && <div className="mt-[var(--laurel-space-6)]">{action}</div>}
      </div>
    );
  },
);

EmptyState.displayName = 'EmptyState';

export { EmptyState };
