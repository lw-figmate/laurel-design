import { forwardRef } from 'react';
import type { KbdProps } from './Kbd.types';

const Kbd = forwardRef<HTMLElement, KbdProps>(({ className = '', children, ...rest }, ref) => (
  <kbd
    ref={ref}
    className={[
      'inline-flex items-center justify-center',
      'min-w-[1.5em] px-[var(--laurel-space-1-5)] py-[var(--laurel-space-0-5)]',
      'rounded-[var(--laurel-radius-md)]',
      'border border-[var(--laurel-border-default)]',
      'bg-[var(--laurel-bg-muted)] text-[var(--laurel-text-secondary)]',
      'font-[family-name:var(--laurel-font-mono)] text-[length:var(--laurel-font-size-xs)]',
      'font-[var(--laurel-font-weight-medium)]',
      'shadow-[0_1px_0_1px_var(--laurel-border-subtle)]',
      className,
    ].filter(Boolean).join(' ')}
    {...rest}
  >
    {children}
  </kbd>
));

Kbd.displayName = 'Kbd';

export { Kbd };
