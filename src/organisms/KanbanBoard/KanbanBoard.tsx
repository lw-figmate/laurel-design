import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { Card, CardBody } from '../../molecules/Card';
import { Badge } from '../../atoms/Badge';
import type { KanbanBoardProps, KanbanColumn, KanbanItem } from './KanbanBoard.types';

function KanbanCard({ item }: { item: KanbanItem }) {
  return (
    <Card className="mb-[var(--laurel-space-2)]">
      <CardBody className="p-[var(--laurel-space-3)]">
        <div className="flex items-start justify-between gap-[var(--laurel-space-2)]">
          <Text as="span" size="sm" weight="medium">
            {item.title}
          </Text>
          {item.assignee && <span className="shrink-0">{item.assignee}</span>}
        </div>
        {item.description && (
          <Text as="p" size="xs" className="mt-[var(--laurel-space-1)] text-[var(--laurel-text-muted)]">
            {item.description}
          </Text>
        )}
        {item.label && (
          <div className="mt-[var(--laurel-space-2)]">
            <Badge size="sm">{item.label}</Badge>
          </div>
        )}
      </CardBody>
    </Card>
  );
}

function KanbanColumnComponent({
  column,
  onAddItem,
}: {
  column: KanbanColumn;
  onAddItem?: (columnId: string) => void;
}) {
  return (
    <div
      className={[
        'flex flex-col min-w-[280px] w-[300px]',
        'bg-[var(--laurel-bg-muted)]',
        'rounded-[var(--laurel-radius-lg)]',
        'p-[var(--laurel-space-3)]',
      ].join(' ')}
    >
      <div className="flex items-center justify-between mb-[var(--laurel-space-3)]">
        <div className="flex items-center gap-[var(--laurel-space-2)]">
          <Text as="span" size="sm" weight="semibold">
            {column.title}
          </Text>
          <Badge size="sm" variant="neutral">
            {column.items.length}
          </Badge>
        </div>
        {onAddItem && (
          <Button variant="ghost" size="sm" onClick={() => onAddItem(column.id)} aria-label={`Add to ${column.title}`}>
            +
          </Button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        {column.items.map((item) => (
          <KanbanCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const KanbanBoard = forwardRef<HTMLDivElement, KanbanBoardProps>(
  ({ columns, onItemMove, onAddItem, className = '', ...rest }, ref) => (
    <div
      ref={ref}
      className={[
        'flex gap-[var(--laurel-space-4)] overflow-x-auto',
        'font-[family-name:var(--laurel-font-sans)]',
        'p-[var(--laurel-space-2)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {columns.map((col) => (
        <KanbanColumnComponent key={col.id} column={col} onAddItem={onAddItem} />
      ))}
    </div>
  ),
);

KanbanBoard.displayName = 'KanbanBoard';

export { KanbanBoard };
