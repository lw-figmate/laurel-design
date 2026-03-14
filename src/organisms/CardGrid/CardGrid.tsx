import { forwardRef, Children } from 'react';
import type { CardGridProps } from './CardGrid.types';

const CardGrid = forwardRef<HTMLDivElement, CardGridProps>(
  ({ minCardWidth = '280px', gap = 'var(--laurel-space-6)', emptyState, className = '', children, ...rest }, ref) => {
    const hasChildren = Children.count(children) > 0;

    if (!hasChildren && emptyState) {
      return (
        <div ref={ref} className={className} {...rest}>
          {emptyState}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fill, minmax(${minCardWidth}, 1fr))`,
          gap,
        }}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

CardGrid.displayName = 'CardGrid';

export { CardGrid };
