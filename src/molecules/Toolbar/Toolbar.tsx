import { forwardRef } from 'react';
import type { ToolbarProps, ToolbarGroupProps } from './Toolbar.types';

const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>(
  ({ orientation = 'horizontal', children, className = '', ...rest }, ref) => {
    return (
      <div
        ref={ref}
        role="toolbar"
        aria-orientation={orientation}
        className={[
          'flex items-center gap-[var(--laurel-space-1)] p-[var(--laurel-space-1)]',
          'rounded-[var(--laurel-radius-lg)] border border-[var(--laurel-border-subtle)] bg-[var(--laurel-bg-surface)]',
          'font-[family-name:var(--laurel-font-sans)]',
          orientation === 'vertical' && 'flex-col',
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

Toolbar.displayName = 'Toolbar';

const ToolbarGroup = forwardRef<HTMLDivElement, ToolbarGroupProps>(
  ({ children, className = '', ...rest }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        className={[
          'flex items-center gap-[var(--laurel-space-0-5)]',
          'border-r border-[var(--laurel-border-subtle)] last:border-r-0 pr-[var(--laurel-space-1)] last:pr-0',
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

ToolbarGroup.displayName = 'ToolbarGroup';

export { Toolbar, ToolbarGroup };
