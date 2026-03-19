import { forwardRef } from 'react';
import type { KbdProps } from './Kbd.types';

const sizeClasses: Record<string, string> = {
  sm: 'px-[var(--laurel-space-1)] py-[var(--laurel-space-0-5)] text-[length:var(--laurel-font-size-2xs)] rounded-[var(--laurel-radius-sm)]',
  md: 'px-[var(--laurel-space-1-5)] py-[var(--laurel-space-0-5)] text-[length:var(--laurel-font-size-xs)] rounded-[var(--laurel-radius-md)]',
  lg: 'px-[var(--laurel-space-2)] py-[var(--laurel-space-0-75)] text-[length:var(--laurel-font-size-sm)] rounded-[var(--laurel-radius-lg)]',
};

const variantClasses: Record<string, string> = {
  subtle:
    'border border-[var(--laurel-border-default)] bg-[var(--laurel-bg-muted)] shadow-[0_1px_0_1px_var(--laurel-border-subtle)]',
  outline:
    'border border-[var(--laurel-border-default)]',
  plain: '',
};

const Kbd = forwardRef<HTMLElement, KbdProps>(({ size = 'md', variant = 'subtle', className = '', children, ...rest }, ref) => (
  <kbd
    ref={ref}
    className={[
      'inline-flex items-center justify-center min-w-[1.5em]',
      'text-[var(--laurel-text-secondary)]',
      'font-[family-name:var(--laurel-font-mono)]',
      'font-[var(--laurel-font-weight-medium)]',
      sizeClasses[size],
      variantClasses[variant],
      className,
    ].filter(Boolean).join(' ')}
    {...rest}
  >
    {children}
  </kbd>
));

Kbd.displayName = 'Kbd';

export { Kbd };
