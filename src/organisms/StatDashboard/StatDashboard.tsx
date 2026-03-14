import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import { Stat } from '../../molecules/Stat';
import type { StatDashboardProps } from './StatDashboard.types';

const StatDashboard = forwardRef<HTMLDivElement, StatDashboardProps>(
  ({ stats, columns = 4, title, className = '', ...rest }, ref) => (
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

      <div
        className="grid gap-[var(--laurel-space-4)]"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {stats.map((stat) => (
          <Stat
            key={stat.label}
            label={stat.label}
            value={stat.value}
            helpText={stat.helpText}
            trend={stat.trend}
            icon={stat.icon}
          />
        ))}
      </div>
    </div>
  ),
);

StatDashboard.displayName = 'StatDashboard';

export { StatDashboard };
