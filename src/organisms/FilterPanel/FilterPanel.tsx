import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { Collapsible } from '../../molecules/Collapsible';
import type { FilterPanelProps } from './FilterPanel.types';

const FilterPanel = forwardRef<HTMLDivElement, FilterPanelProps>(
  (
    { title = 'Filters', sections, onClear, clearLabel = 'Clear all', className = '', ...rest },
    ref,
  ) => (
    <div
      ref={ref}
      className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <div className="flex items-center justify-between mb-[var(--laurel-space-4)]">
        <Text as="strong" size="sm" weight="semibold">
          {title}
        </Text>
        {onClear && (
          <Button variant="ghost" size="sm" onClick={onClear} type="button">
            {clearLabel}
          </Button>
        )}
      </div>

      <div className="space-y-[var(--laurel-space-3)]">
        {sections.map((section) => (
          <Collapsible
            key={section.title}
            trigger={
              <Text as="span" size="sm" weight="medium">
                {section.title}
              </Text>
            }
            defaultOpen={section.defaultOpen !== false}
          >
            <div className="pt-[var(--laurel-space-2)]">{section.content}</div>
          </Collapsible>
        ))}
      </div>
    </div>
  ),
);

FilterPanel.displayName = 'FilterPanel';

export { FilterPanel };
