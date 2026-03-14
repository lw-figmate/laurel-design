import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import type { EmptyPageProps } from './EmptyPage.types';

const EmptyPage = forwardRef<HTMLDivElement, EmptyPageProps>(
  ({ illustration, title, description, action, secondaryAction, className = '', ...rest }, ref) => (
    <div
      ref={ref}
      className={[
        'flex min-h-[60vh] flex-col items-center justify-center text-center',
        'px-[var(--laurel-space-6)] py-[var(--laurel-space-16)]',
        'font-[family-name:var(--laurel-font-sans)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {illustration && <div className="mb-[var(--laurel-space-6)]">{illustration}</div>}

      <Text as="h1" size="2xl" weight="semibold" className="mb-[var(--laurel-space-2)]">
        {title}
      </Text>

      {description && (
        <Text as="p" size="md" className="text-[var(--laurel-text-muted)] max-w-md mb-[var(--laurel-space-6)]">
          {description}
        </Text>
      )}

      {(action || secondaryAction) && (
        <div className="flex flex-wrap gap-[var(--laurel-space-3)]">
          {action}
          {secondaryAction}
        </div>
      )}
    </div>
  ),
);

EmptyPage.displayName = 'EmptyPage';

export { EmptyPage };
