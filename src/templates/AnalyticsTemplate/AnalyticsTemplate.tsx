import { forwardRef } from 'react';
import { PageHeader } from '../../organisms/PageHeader';
import { StatDashboard } from '../../organisms/StatDashboard';
import { Card, CardHeader, CardBody } from '../../molecules/Card';
import { Text } from '../../atoms/Text';
import type { AnalyticsTemplateProps } from './AnalyticsTemplate.types';

const AnalyticsTemplate = forwardRef<HTMLDivElement, AnalyticsTemplateProps>(
  ({ title, stats, charts, filters, breadcrumbs, className = '', ...rest }, ref) => (
    <div
      ref={ref}
      className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <PageHeader title={title} breadcrumbs={breadcrumbs} actions={filters} />

      {stats && stats.length > 0 && (
        <div className="mb-[var(--laurel-space-6)]">
          <StatDashboard stats={stats} />
        </div>
      )}

      <div className="grid grid-cols-3 gap-[var(--laurel-space-4)]">
        {charts.map((chart) => (
          <Card
            key={chart.title}
            className={chart.span && chart.span > 1 ? `col-span-${chart.span}` : ''}
            style={chart.span && chart.span > 1 ? { gridColumn: `span ${chart.span}` } : undefined}
          >
            <CardHeader>
              <Text as="h3" size="sm" weight="semibold">
                {chart.title}
              </Text>
            </CardHeader>
            <CardBody>{chart.content}</CardBody>
          </Card>
        ))}
      </div>
    </div>
  ),
);

AnalyticsTemplate.displayName = 'AnalyticsTemplate';

export { AnalyticsTemplate };
