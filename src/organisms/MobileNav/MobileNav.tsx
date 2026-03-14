import { forwardRef, useState } from 'react';
import { Drawer } from '../../molecules/Drawer';
import { Text } from '../../atoms/Text';
import type { MobileNavProps } from './MobileNav.types';

const hamburgerIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 5A.75.75 0 0 1 2.75 9h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75Zm0 5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);

const MobileNav = forwardRef<HTMLDivElement, MobileNavProps>(
  ({ links, onLinkClick, header, footer, className = '', ...rest }, ref) => {
    const [open, setOpen] = useState(false);

    return (
      <div
        ref={ref}
        className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
        {...rest}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          className="p-[var(--laurel-space-2)] rounded-[var(--laurel-radius-md)] hover:bg-[var(--laurel-bg-subtle)] transition-colors cursor-pointer"
        >
          {hamburgerIcon}
        </button>

        <Drawer open={open} onClose={() => setOpen(false)} placement="left" title="Navigation">
          {header && <div className="mb-[var(--laurel-space-4)]">{header}</div>}

          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-[var(--laurel-space-1)]">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (onLinkClick) {
                        e.preventDefault();
                        onLinkClick(link.href);
                        setOpen(false);
                      }
                    }}
                    className={[
                      'flex items-center gap-[var(--laurel-space-3)]',
                      'px-[var(--laurel-space-3)] py-[var(--laurel-space-2)]',
                      'rounded-[var(--laurel-radius-md)] transition-colors',
                      'text-[length:var(--laurel-font-size-sm)]',
                      link.active
                        ? 'bg-[var(--laurel-bg-brand-muted)] text-[var(--laurel-text-brand)] font-medium'
                        : 'text-[var(--laurel-text-secondary)] hover:bg-[var(--laurel-bg-subtle)]',
                    ].join(' ')}
                  >
                    {link.icon && <span className="shrink-0">{link.icon}</span>}
                    <Text as="span" size="sm">
                      {link.label}
                    </Text>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {footer && <div className="mt-auto pt-[var(--laurel-space-4)] border-t border-[var(--laurel-border-subtle)]">{footer}</div>}
        </Drawer>
      </div>
    );
  },
);

MobileNav.displayName = 'MobileNav';

export { MobileNav };
