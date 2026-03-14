import { forwardRef } from 'react';
import { PageHeader } from '../../organisms/PageHeader';
import { SettingsForm } from '../../organisms/SettingsForm';
import { Text } from '../../atoms/Text';
import type { SettingsTemplateProps } from './SettingsTemplate.types';

const SettingsTemplate = forwardRef<HTMLDivElement, SettingsTemplateProps>(
  ({ title = 'Settings', sections, onSave, saving, navItems, breadcrumbs, className = '', ...rest }, ref) => (
    <div
      ref={ref}
      className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <PageHeader title={title} breadcrumbs={breadcrumbs} />

      <div className={navItems ? 'flex gap-[var(--laurel-space-8)]' : ''}>
        {navItems && (
          <nav className="w-56 shrink-0" aria-label="Settings navigation">
            <ul className="space-y-[var(--laurel-space-1)]">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex items-center gap-[var(--laurel-space-2)] px-[var(--laurel-space-3)] py-[var(--laurel-space-2)] rounded-[var(--laurel-radius-md)] text-[length:var(--laurel-font-size-sm)] hover:bg-[var(--laurel-bg-subtle)]"
                  >
                    {item.icon}
                    <Text as="span" size="sm">{item.label}</Text>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="flex-1">
          <SettingsForm
            sections={sections}
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const values: Record<string, string> = {};
              formData.forEach((val, key) => {
                values[key] = String(val);
              });
              onSave(values);
            }}
            loading={saving}
          />
        </div>
      </div>
    </div>
  ),
);

SettingsTemplate.displayName = 'SettingsTemplate';

export { SettingsTemplate };
