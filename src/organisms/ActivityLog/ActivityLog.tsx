import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import { Timeline, TimelineItem } from '../../molecules/Timeline';
import { Pagination } from '../../molecules/Pagination';
import type { ActivityLogProps } from './ActivityLog.types';

const ActivityLog = forwardRef<HTMLDivElement, ActivityLogProps>(
  (
    {
      events,
      totalPages,
      currentPage,
      onPageChange,
      title = 'Activity',
      emptyMessage = 'No activity yet',
      className = '',
      ...rest
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {title && (
        <Text as="h2" size="xl" weight="semibold" className="mb-[var(--laurel-space-6)]">
          {title}
        </Text>
      )}

      {events.length === 0 ? (
        <Text as="p" size="sm" className="text-[var(--laurel-text-muted)]">
          {emptyMessage}
        </Text>
      ) : (
        <Timeline>
          {events.map((event) => (
            <TimelineItem
              key={event.id}
              title={event.title}
              description={event.timestamp}
              icon={event.icon}
              variant={event.variant}
            >
              {event.description && (
                <Text as="p" size="sm" className="text-[var(--laurel-text-muted)]">
                  {event.description}
                </Text>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      )}

      {totalPages && totalPages > 1 && currentPage && onPageChange && (
        <div className="mt-[var(--laurel-space-6)]">
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
        </div>
      )}
    </div>
  ),
);

ActivityLog.displayName = 'ActivityLog';

export { ActivityLog };
