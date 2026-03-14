import { forwardRef } from 'react';
import type { AuthPageProps } from './AuthPage.types';

const AuthPage = forwardRef<HTMLDivElement, AuthPageProps>(
  ({ children, logo, backgroundImage, variant = 'split', sideContent, footer, className = '', ...rest }, ref) => (
    <div
      ref={ref}
      className={[
        'flex min-h-screen font-[family-name:var(--laurel-font-sans)]',
        variant === 'centered' ? 'items-center justify-center' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {variant === 'split' && (
        <div
          className="hidden lg:flex lg:w-1/2 items-center justify-center bg-[var(--laurel-bg-brand)]"
          style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
        >
          {sideContent && <div className="p-[var(--laurel-space-8)]">{sideContent}</div>}
        </div>
      )}

      <div
        className={[
          'flex flex-col items-center justify-center px-[var(--laurel-space-6)] py-[var(--laurel-space-12)]',
          variant === 'split' ? 'w-full lg:w-1/2' : 'w-full max-w-md',
        ].join(' ')}
      >
        {logo && <div className="mb-[var(--laurel-space-8)]">{logo}</div>}

        <div className="w-full max-w-sm">{children}</div>

        {footer && (
          <div className="mt-[var(--laurel-space-8)] text-center">{footer}</div>
        )}
      </div>
    </div>
  ),
);

AuthPage.displayName = 'AuthPage';

export { AuthPage };
