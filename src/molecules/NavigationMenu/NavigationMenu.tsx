import { forwardRef, useState } from 'react';
import type {
  NavigationMenuProps,
  NavigationMenuItemProps,
  NavigationMenuLinkProps,
} from './NavigationMenu.types';

const NavigationMenu = forwardRef<HTMLElement, NavigationMenuProps>(
  ({ className = '', children, ...rest }, ref) => (
    <nav
      ref={ref}
      className={[
        'font-[family-name:var(--laurel-font-sans)]',
        className,
      ].filter(Boolean).join(' ')}
      {...rest}
    >
      <ul className="flex items-center gap-[var(--laurel-space-1)]" role="menubar">
        {children}
      </ul>
    </nav>
  ),
);

NavigationMenu.displayName = 'NavigationMenu';

const NavigationMenuItem = forwardRef<HTMLDivElement, NavigationMenuItemProps>(
  ({ trigger, children, className = '', ...rest }, ref) => {
    const [open, setOpen] = useState(false);

    return (
      <li
        role="none"
        className="relative"
        onMouseEnter={() => children && setOpen(true)}
        onMouseLeave={() => children && setOpen(false)}
      >
        <div
          ref={ref}
          role="menuitem"
          aria-haspopup={children ? 'true' : undefined}
          aria-expanded={children ? open : undefined}
          className={[
            'inline-flex items-center gap-[var(--laurel-space-1)]',
            'px-[var(--laurel-space-3)] py-[var(--laurel-space-2)]',
            'text-[length:var(--laurel-font-size-sm)] font-[var(--laurel-font-weight-medium)]',
            'text-[var(--laurel-text-secondary)]',
            'rounded-[var(--laurel-radius-md)]',
            'hover:bg-[var(--laurel-bg-subtle)] cursor-pointer transition-colors',
            className,
          ].filter(Boolean).join(' ')}
          {...rest}
        >
          {trigger}
          {children && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={['h-4 w-4 transition-transform', open ? 'rotate-180' : ''].join(' ')}
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        {children && open && (
          <div
            className={[
              'absolute left-0 z-50 mt-[var(--laurel-space-1)]',
              'min-w-[200px] p-[var(--laurel-space-2)]',
              'bg-[var(--laurel-bg-surface)] border border-[var(--laurel-border-subtle)]',
              'rounded-[var(--laurel-radius-lg)] shadow-lg',
            ].join(' ')}
          >
            {children}
          </div>
        )}
      </li>
    );
  },
);

NavigationMenuItem.displayName = 'NavigationMenuItem';

const NavigationMenuLink = forwardRef<HTMLAnchorElement, NavigationMenuLinkProps>(
  ({ active = false, className = '', children, ...rest }, ref) => (
    <a
      ref={ref}
      className={[
        'block px-[var(--laurel-space-3)] py-[var(--laurel-space-1-5)]',
        'text-[length:var(--laurel-font-size-sm)]',
        'rounded-[var(--laurel-radius-md)]',
        'hover:bg-[var(--laurel-bg-subtle)] transition-colors',
        active
          ? 'text-[var(--laurel-text-brand)] font-[var(--laurel-font-weight-semibold)]'
          : 'text-[var(--laurel-text-secondary)]',
        className,
      ].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </a>
  ),
);

NavigationMenuLink.displayName = 'NavigationMenuLink';

export { NavigationMenu, NavigationMenuItem, NavigationMenuLink };
