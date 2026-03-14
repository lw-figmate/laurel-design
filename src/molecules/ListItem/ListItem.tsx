import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import type { ListItemProps } from './ListItem.types';

const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  ({ leading, trailing, primary, secondary, interactive = false, selected = false, className = '', onClick, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        role={interactive ? 'button' : undefined}
        tabIndex={interactive ? 0 : undefined}
        onClick={onClick}
        onKeyDown={
          interactive
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>);
                }
              }
            : undefined
        }
        className={[
          'flex items-center gap-[var(--laurel-space-3)] px-[var(--laurel-space-4)] py-[var(--laurel-space-3)]',
          'font-[family-name:var(--laurel-font-sans)]',
          interactive && 'cursor-pointer hover:bg-[var(--laurel-bg-muted)] transition-colors',
          selected && 'bg-[var(--laurel-bg-brand-muted)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {leading && <div className="shrink-0">{leading}</div>}
        <div className="flex-1 min-w-0">
          <Text as="span" size="sm" weight="medium" className="block truncate">
            {primary}
          </Text>
          {secondary && (
            <Text as="span" size="xs" className="block truncate text-[var(--laurel-text-muted)]">
              {secondary}
            </Text>
          )}
        </div>
        {trailing && <div className="shrink-0">{trailing}</div>}
      </div>
    );
  },
);

ListItem.displayName = 'ListItem';

export { ListItem };
