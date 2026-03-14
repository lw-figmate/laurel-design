import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import type { ErrorPageProps } from './ErrorPage.types';

const ErrorPage = forwardRef<HTMLDivElement, ErrorPageProps>(
  ({ code, title, description, illustration, action, secondaryAction, supportHref, className = '', ...rest }, ref) => (
    <div
      ref={ref}
      className={[
        'flex min-h-screen flex-col items-center justify-center text-center',
        'px-[var(--laurel-space-6)] py-[var(--laurel-space-16)]',
        'font-[family-name:var(--laurel-font-sans)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {illustration && <div className="mb-[var(--laurel-space-6)]">{illustration}</div>}

      {code && (
        <Text as="p" size="2xl" weight="bold" className="text-[var(--laurel-text-brand)] mb-[var(--laurel-space-2)]">
          {code}
        </Text>
      )}

      <Text as="h1" size="2xl" weight="semibold" className="mb-[var(--laurel-space-2)]">
        {title}
      </Text>

      {description && (
        <Text as="p" size="md" className="text-[var(--laurel-text-muted)] max-w-md mb-[var(--laurel-space-8)]">
          {description}
        </Text>
      )}

      {(action || secondaryAction) && (
        <div className="flex flex-wrap gap-[var(--laurel-space-3)]">
          {action}
          {secondaryAction}
        </div>
      )}

      {supportHref && (
        <a
          href={supportHref}
          className="mt-[var(--laurel-space-6)] text-[length:var(--laurel-font-size-sm)] text-[var(--laurel-text-brand)] hover:underline"
        >
          Contact support
        </a>
      )}
    </div>
  ),
);

ErrorPage.displayName = 'ErrorPage';

export { ErrorPage };
