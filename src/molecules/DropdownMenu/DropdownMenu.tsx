import { forwardRef, useState, useRef, useEffect, Children, cloneElement, isValidElement } from 'react';
import type { DropdownMenuProps, DropdownMenuItemProps, DropdownMenuSeparatorProps } from './DropdownMenu.types';

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ trigger, children, align = 'start', className = '', ...rest }, ref) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!open) return;
      const handleClick = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false);
      };
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('keydown', handleKey);
      return () => {
        document.removeEventListener('mousedown', handleClick);
        document.removeEventListener('keydown', handleKey);
      };
    }, [open]);

    return (
      <div
        ref={(node) => {
          (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={['relative inline-block', className].filter(Boolean).join(' ')}
        {...rest}
      >
        <div onClick={() => setOpen(!open)} role="button" aria-haspopup="true" aria-expanded={open}>
          {trigger}
        </div>
        {open && (
          <div
            role="menu"
            className={[
              'absolute z-50 mt-[var(--laurel-space-1)]',
              'min-w-[160px] py-[var(--laurel-space-1)]',
              'bg-[var(--laurel-bg-surface)] border border-[var(--laurel-border-subtle)]',
              'rounded-[var(--laurel-radius-lg)] shadow-lg',
              'font-[family-name:var(--laurel-font-sans)]',
              align === 'end' ? 'right-0' : 'left-0',
            ].join(' ')}
          >
            {Children.map(children, (child) => {
              if (isValidElement<DropdownMenuItemProps>(child)) {
                return cloneElement(child, {
                  onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
                    child.props.onClick?.(e);
                    setOpen(false);
                  },
                } as Partial<DropdownMenuItemProps>);
              }
              return child;
            })}
          </div>
        )}
      </div>
    );
  },
);

DropdownMenu.displayName = 'DropdownMenu';

const DropdownMenuItem = forwardRef<HTMLButtonElement, DropdownMenuItemProps>(
  ({ disabled = false, className = '', children, ...rest }, ref) => (
    <button
      ref={ref}
      type="button"
      role="menuitem"
      disabled={disabled}
      className={[
        'block w-full px-[var(--laurel-space-3)] py-[var(--laurel-space-1-5)]',
        'text-left text-[length:var(--laurel-font-size-sm)] text-[var(--laurel-text-secondary)]',
        'hover:bg-[var(--laurel-bg-subtle)] cursor-pointer',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      ].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </button>
  ),
);

DropdownMenuItem.displayName = 'DropdownMenuItem';

const DropdownMenuSeparator = forwardRef<HTMLDivElement, DropdownMenuSeparatorProps>(
  ({ className = '', ...rest }, ref) => (
    <div
      ref={ref}
      role="separator"
      className={['my-[var(--laurel-space-1)] h-px bg-[var(--laurel-bg-subtle)]', className].filter(Boolean).join(' ')}
      {...rest}
    />
  ),
);

DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

export { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator };
