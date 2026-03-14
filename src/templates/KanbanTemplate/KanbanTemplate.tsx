import { forwardRef } from 'react';
import { PageHeader } from '../../organisms/PageHeader';
import { KanbanBoard } from '../../organisms/KanbanBoard';
import type { KanbanTemplateProps } from './KanbanTemplate.types';

const KanbanTemplate = forwardRef<HTMLDivElement, KanbanTemplateProps>(
  ({ title, columns, onItemMove, toolbar, primaryAction, breadcrumbs, className = '', ...rest }, ref) => (
    <div
      ref={ref}
      className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <PageHeader title={title} breadcrumbs={breadcrumbs} actions={primaryAction} />

      {toolbar && <div className="mb-[var(--laurel-space-4)]">{toolbar}</div>}

      <KanbanBoard columns={columns} onItemMove={onItemMove} />
    </div>
  ),
);

KanbanTemplate.displayName = 'KanbanTemplate';

export { KanbanTemplate };
