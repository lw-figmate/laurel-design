import { forwardRef } from 'react';
import type { PageLayoutProps } from './PageLayout.types';

const PageLayout = forwardRef<HTMLDivElement, PageLayoutProps>(
  ({ header, sidebar, footer, children, sidebarCollapsed, maxWidth, className = '', ...rest }, ref) => (
    <div
      ref={ref}
      className={['flex min-h-screen flex-col font-[family-name:var(--laurel-font-sans)]', className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {header}

      <div className="flex flex-1">
        {sidebar}

        <main
          className="flex-1 p-[var(--laurel-space-6)]"
          style={maxWidth ? { maxWidth, marginInline: 'auto', width: '100%' } : undefined}
        >
          {children}
        </main>
      </div>

      {footer}
    </div>
  ),
);

PageLayout.displayName = 'PageLayout';

export { PageLayout };
