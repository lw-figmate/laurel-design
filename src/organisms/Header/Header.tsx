import { forwardRef } from 'react';
import type { HeaderProps } from './Header.types';

const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ logo, nav, actions, sticky = false, className = '', children, ...rest }, ref) => (
    <header
      ref={ref}
      className={[
        'flex items-center justify-between',
        'px-[var(--laurel-space-6)] py-[var(--laurel-space-3)]',
        'bg-[var(--laurel-bg-surface)] border-b border-[var(--laurel-border-subtle)]',
        'font-[family-name:var(--laurel-font-sans)]',
        sticky ? 'sticky top-0 z-40' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <div className="flex items-center gap-[var(--laurel-space-4)] shrink-0">{logo}</div>

      {nav && <div className="hidden md:flex items-center flex-1 justify-center">{nav}</div>}

      {actions && <div className="flex items-center gap-[var(--laurel-space-3)] shrink-0">{actions}</div>}

      {children}
    </header>
  ),
);

Header.displayName = 'Header';

export { Header };
