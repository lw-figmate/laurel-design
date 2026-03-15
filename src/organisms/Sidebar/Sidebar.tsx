import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import type { SidebarProps, SidebarItemProps, SidebarSectionProps } from './Sidebar.types';

const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      collapsed = false,
      width = '256px',
      collapsedWidth = '64px',
      header,
      footer,
      children,
      className = '',
      ...rest
    },
    ref,
  ) => (
    <aside
      ref={ref}
      style={{ width: collapsed ? collapsedWidth : width }}
      className={[
        'flex flex-col h-full',
        'bg-[var(--laurel-bg-surface)] border-r border-[var(--laurel-border-subtle)]',
        'font-[family-name:var(--laurel-font-sans)] transition-[width] duration-[var(--laurel-duration-normal)] overflow-hidden',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {header && (
        <div className="px-[var(--laurel-space-4)] py-[var(--laurel-space-4)] border-b border-[var(--laurel-border-muted)]">
          {header}
        </div>
      )}

      <nav className="flex-1 overflow-y-auto py-[var(--laurel-space-2)]">{children}</nav>

      {footer && (
        <div className="px-[var(--laurel-space-4)] py-[var(--laurel-space-4)] border-t border-[var(--laurel-border-muted)]">
          {footer}
        </div>
      )}
    </aside>
  ),
);

Sidebar.displayName = 'Sidebar';

const SidebarItem = forwardRef<HTMLAnchorElement, SidebarItemProps>(
  ({ icon, active = false, className = '', children, ...rest }, ref) => (
    <a
      ref={ref}
      className={[
        'flex items-center gap-[var(--laurel-space-3)]',
        'px-[var(--laurel-space-4)] py-[var(--laurel-space-2)]',
        'text-[length:var(--laurel-font-size-sm)] rounded-[var(--laurel-radius-md)]',
        'mx-[var(--laurel-space-2)] cursor-pointer transition-colors',
        active
          ? 'bg-[var(--laurel-bg-brand-muted)] text-[var(--laurel-text-brand)] font-[var(--laurel-font-weight-medium)]'
          : 'text-[var(--laurel-text-tertiary)] hover:bg-[var(--laurel-bg-subtle)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {icon && <span className="shrink-0 h-5 w-5 flex items-center justify-center">{icon}</span>}
      <span className="truncate">{children}</span>
    </a>
  ),
);

SidebarItem.displayName = 'SidebarItem';

const SidebarSection = forwardRef<HTMLDivElement, SidebarSectionProps>(
  ({ title, children, className = '', ...rest }, ref) => (
    <div ref={ref} className={['py-[var(--laurel-space-2)]', className].filter(Boolean).join(' ')} {...rest}>
      {title && (
        <Text
          as="span"
          size="xs"
          weight="semibold"
          className="block px-[var(--laurel-space-6)] py-[var(--laurel-space-1)] text-[var(--laurel-text-placeholder)] uppercase tracking-wider"
        >
          {title}
        </Text>
      )}
      {children}
    </div>
  ),
);

SidebarSection.displayName = 'SidebarSection';

export { Sidebar, SidebarItem, SidebarSection };
