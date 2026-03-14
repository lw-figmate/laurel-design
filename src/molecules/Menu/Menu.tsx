import { forwardRef } from 'react';
import type { MenuProps, MenuItemProps } from './Menu.types';

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ children, className = '', ...rest }, ref) => {
    return (
      <div
        ref={ref}
        role="menu"
        className={[
          'rounded-[var(--laurel-radius-lg)] border border-[var(--laurel-border-subtle)] bg-[var(--laurel-bg-surface)] py-[var(--laurel-space-1)] shadow-[var(--laurel-shadow-lg)]',
          'font-[family-name:var(--laurel-font-sans)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

Menu.displayName = 'Menu';

const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ disabled, children, className = '', ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        role="menuitem"
        disabled={disabled}
        className={[
          'flex w-full items-center gap-[var(--laurel-space-2)] px-[var(--laurel-space-4)] py-[var(--laurel-space-2)]',
          'text-[length:var(--laurel-font-size-sm)] text-left',
          'transition-colors cursor-pointer',
          'hover:bg-[var(--laurel-bg-muted)]',
          'focus:outline-none focus:bg-[var(--laurel-bg-muted)]',
          'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

MenuItem.displayName = 'MenuItem';

export { Menu, MenuItem };
