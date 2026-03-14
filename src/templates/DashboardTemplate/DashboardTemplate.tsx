import { forwardRef } from 'react';
import { PageHeader } from '../../organisms/PageHeader';
import { StatDashboard } from '../../organisms/StatDashboard';
import type { DashboardTemplateProps } from './DashboardTemplate.types';

const DashboardTemplate = forwardRef<HTMLDivElement, DashboardTemplateProps>(
  ({ title, stats, actions, children, sidebar, breadcrumbs, className = '', ...rest }, ref) => (
    <div
      ref={ref}
      className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <PageHeader title={title} breadcrumbs={breadcrumbs} actions={actions} />

      {stats && stats.length > 0 && (
        <div className="mb-[var(--laurel-space-6)]">
          <StatDashboard stats={stats} />
        </div>
      )}

      <div className={sidebar ? 'flex gap-[var(--laurel-space-6)]' : ''}>
        <div className="flex-1">{children}</div>

        {sidebar && (
          <aside className="w-80 shrink-0">{sidebar}</aside>
        )}
      </div>
    </div>
  ),
);

DashboardTemplate.displayName = 'DashboardTemplate';

export { DashboardTemplate };
