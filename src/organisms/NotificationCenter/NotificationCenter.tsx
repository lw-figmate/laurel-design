import { forwardRef, useState, useRef, useEffect } from 'react';
import { Text } from '../../atoms/Text';
import { Badge } from '../../atoms/Badge';
import { Button } from '../../atoms/Button';
import { ScrollArea } from '../../molecules/ScrollArea';
import type { NotificationCenterProps } from './NotificationCenter.types';

const bellIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M10 2a6 6 0 0 0-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 0 0 .515 1.076 32.91 32.91 0 0 0 3.256.508 3.5 3.5 0 0 0 6.972 0 32.903 32.903 0 0 0 3.256-.508.75.75 0 0 0 .515-1.076A11.448 11.448 0 0 1 16 8a6 6 0 0 0-6-6ZM8.05 14.943a33.54 33.54 0 0 0 3.9 0 2 2 0 0 1-3.9 0Z"
      clipRule="evenodd"
    />
  </svg>
);

const NotificationCenter = forwardRef<HTMLDivElement, NotificationCenterProps>(
  (
    {
      notifications,
      onNotificationClick,
      onMarkAllRead,
      trigger,
      title = 'Notifications',
      emptyMessage = 'No notifications',
      className = '',
      ...rest
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const unreadCount = notifications.filter((n) => n.unread).length;

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
        className={['relative inline-block font-[family-name:var(--laurel-font-sans)]', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Notifications"
          aria-haspopup="true"
          aria-expanded={open}
          className="relative p-[var(--laurel-space-2)] rounded-[var(--laurel-radius-md)] hover:bg-[var(--laurel-bg-subtle)] transition-colors cursor-pointer"
        >
          {trigger ?? bellIcon}
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5">
              <Badge variant="error" size="sm">
                {unreadCount}
              </Badge>
            </span>
          )}
        </button>

        {open && (
          <div
            className={[
              'absolute right-0 z-50 mt-[var(--laurel-space-2)]',
              'w-80 bg-[var(--laurel-bg-surface)]',
              'border border-[var(--laurel-border-subtle)]',
              'rounded-[var(--laurel-radius-xl)] shadow-lg overflow-hidden',
            ].join(' ')}
          >
            <div className="flex items-center justify-between px-[var(--laurel-space-4)] py-[var(--laurel-space-3)] border-b border-[var(--laurel-border-muted)]">
              <Text as="strong" size="sm" weight="semibold">
                {title}
              </Text>
              {onMarkAllRead && unreadCount > 0 && (
                <Button variant="ghost" size="sm" onClick={onMarkAllRead} type="button">
                  Mark all read
                </Button>
              )}
            </div>

            <ScrollArea maxHeight={320}>
              {notifications.length === 0 ? (
                <div className="py-[var(--laurel-space-8)] text-center">
                  <Text as="span" size="sm" className="text-[var(--laurel-text-muted)]">
                    {emptyMessage}
                  </Text>
                </div>
              ) : (
                notifications.map((n) => (
                  <button
                    key={n.id}
                    type="button"
                    onClick={() => onNotificationClick?.(n.id)}
                    className={[
                      'w-full text-left px-[var(--laurel-space-4)] py-[var(--laurel-space-3)]',
                      'flex items-start gap-[var(--laurel-space-3)]',
                      'hover:bg-[var(--laurel-bg-muted)] transition-colors cursor-pointer',
                      'border-b border-[var(--laurel-border-muted)] last:border-b-0',
                      n.unread ? 'bg-[var(--laurel-bg-brand-muted)]' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {n.icon && (
                      <span className="shrink-0 mt-0.5 h-8 w-8 flex items-center justify-center rounded-full bg-[var(--laurel-bg-subtle)]">
                        {n.icon}
                      </span>
                    )}
                    <div className="flex-1 min-w-0">
                      <Text as="span" size="sm" weight={n.unread ? 'semibold' : 'normal'} className="block truncate">
                        {n.title}
                      </Text>
                      {n.description && (
                        <Text as="span" size="xs" className="block text-[var(--laurel-text-muted)] truncate">
                          {n.description}
                        </Text>
                      )}
                      <Text as="span" size="xs" className="block text-[var(--laurel-text-placeholder)] mt-[var(--laurel-space-0-5)]">
                        {n.timestamp}
                      </Text>
                    </div>
                    {n.unread && (
                      <span className="shrink-0 mt-2 h-2 w-2 rounded-full bg-[var(--laurel-bg-brand)]" />
                    )}
                  </button>
                ))
              )}
            </ScrollArea>
          </div>
        )}
      </div>
    );
  },
);

NotificationCenter.displayName = 'NotificationCenter';

export { NotificationCenter };
