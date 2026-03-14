import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import { Breadcrumb, BreadcrumbItem } from '../../molecules/Breadcrumb';
import type { PageHeaderProps } from './PageHeader.types';

const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ title, description, breadcrumbs, actions, className = '', ...rest }, ref) => (
    <div
      ref={ref}
      className={[
        'font-[family-name:var(--laurel-font-sans)]',
        'pb-[var(--laurel-space-6)] mb-[var(--laurel-space-6)]',
        'border-b border-[var(--laurel-border-subtle)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumb className="mb-[var(--laurel-space-3)]">
          {breadcrumbs.map((crumb, i) => (
            <BreadcrumbItem
              key={crumb.label}
              href={crumb.href}
              active={i === breadcrumbs.length - 1}
            >
              {crumb.label}
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      )}

      <div className="flex items-start justify-between gap-[var(--laurel-space-4)]">
        <div>
          <Text as="h1" size="2xl" weight="bold">
            {title}
          </Text>
          {description && (
            <Text as="p" size="sm" className="mt-[var(--laurel-space-1)] text-[var(--laurel-text-muted)]">
              {description}
            </Text>
          )}
        </div>
        {actions && <div className="flex shrink-0 gap-[var(--laurel-space-3)]">{actions}</div>}
      </div>
    </div>
  ),
);

PageHeader.displayName = 'PageHeader';

export { PageHeader };
