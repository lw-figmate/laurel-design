import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import type { CookieBannerProps } from './CookieBanner.types';

const CookieBanner = forwardRef<HTMLDivElement, CookieBannerProps>(
  (
    {
      message = 'We use cookies to improve your experience. By continuing, you agree to our use of cookies.',
      position = 'bottom',
      acceptLabel = 'Accept all',
      rejectLabel = 'Reject all',
      settingsLabel,
      onAccept,
      onReject,
      onSettings,
      policyHref,
      className = '',
      ...rest
    },
    ref,
  ) =>
    createPortal(
      <div
        ref={ref}
        role="banner"
        className={[
          'fixed left-0 right-0 z-50',
          position === 'top' ? 'top-0' : 'bottom-0',
          'bg-[var(--laurel-bg-surface)]',
          'border-[var(--laurel-border-subtle)]',
          position === 'top' ? 'border-b' : 'border-t',
          'shadow-lg',
          'font-[family-name:var(--laurel-font-sans)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center gap-[var(--laurel-space-4)] px-[var(--laurel-space-6)] py-[var(--laurel-space-4)]">
          <div className="flex-1 min-w-0">
            <Text as="p" size="sm">
              {message}
              {policyHref && (
                <>
                  {' '}
                  <a
                    href={policyHref}
                    className="underline text-[var(--laurel-text-brand)] hover:text-[var(--laurel-text-brand)]"
                  >
                    Learn more
                  </a>
                </>
              )}
            </Text>
          </div>
          <div className="flex shrink-0 gap-[var(--laurel-space-2)]">
            {onSettings && settingsLabel && (
              <Button variant="ghost" size="sm" onClick={onSettings}>
                {settingsLabel}
              </Button>
            )}
            {onReject && (
              <Button variant="outline" size="sm" onClick={onReject}>
                {rejectLabel}
              </Button>
            )}
            <Button size="sm" onClick={onAccept}>
              {acceptLabel}
            </Button>
          </div>
        </div>
      </div>,
      document.body,
    ),
);

CookieBanner.displayName = 'CookieBanner';

export { CookieBanner };
