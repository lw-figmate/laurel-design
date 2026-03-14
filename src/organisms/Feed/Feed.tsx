import { forwardRef, useState, useMemo } from 'react';
import { Avatar } from '../../atoms/Avatar';
import { Text } from '../../atoms/Text';
import { Card } from '../../molecules/Card';
import { Divider } from '../../atoms/Divider';
import { Pagination } from '../../molecules/Pagination';
import type { FeedProps } from './Feed.types';

const Feed = forwardRef<HTMLDivElement, FeedProps>(
  ({ items, pageSize, emptyState, className = '', ...rest }, ref) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = pageSize ? Math.max(1, Math.ceil(items.length / pageSize)) : 1;
    const visible = useMemo(
      () => (pageSize ? items.slice((currentPage - 1) * pageSize, currentPage * pageSize) : items),
      [items, pageSize, currentPage],
    );

    if (items.length === 0 && emptyState) {
      return (
        <div ref={ref} className={className} {...rest}>
          {emptyState}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={['font-[family-name:var(--laurel-font-sans)] space-y-[var(--laurel-space-4)]', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {visible.map((item) => (
          <Card key={item.id}>
            <div className="flex items-start gap-[var(--laurel-space-3)]">
              <Avatar src={item.avatarSrc} initials={item.avatarInitials} size="md" alt={item.author} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-[var(--laurel-space-2)]">
                  <Text as="span" size="sm" weight="semibold">
                    {item.author}
                  </Text>
                  <Text as="span" size="xs" className="text-[var(--laurel-text-muted)]">
                    {item.timestamp}
                  </Text>
                </div>
                <div className="mt-[var(--laurel-space-2)]">{item.content}</div>
                {item.actions && (
                  <>
                    <Divider className="my-[var(--laurel-space-3)]" />
                    <div className="flex items-center gap-[var(--laurel-space-3)]">{item.actions}</div>
                  </>
                )}
              </div>
            </div>
          </Card>
        ))}

        {pageSize && totalPages > 1 && (
          <div className="flex justify-center pt-[var(--laurel-space-2)]">
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
          </div>
        )}
      </div>
    );
  },
);

Feed.displayName = 'Feed';

export { Feed };
