import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { Divider } from '../../atoms/Divider';
import type { SettingsFormProps } from './SettingsForm.types';

const SettingsForm = forwardRef<HTMLFormElement, SettingsFormProps>(
  (
    {
      sections,
      onSubmit,
      onCancel,
      submitLabel = 'Save changes',
      cancelLabel = 'Cancel',
      loading,
      className = '',
      ...rest
    },
    ref,
  ) => (
    <form
      ref={ref}
      onSubmit={onSubmit}
      className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {sections.map((section, i) => (
        <div key={section.title}>
          {i > 0 && <Divider className="my-[var(--laurel-space-8)]" />}
          <div className="mb-[var(--laurel-space-4)]">
            <Text as="h2" size="lg" weight="semibold">
              {section.title}
            </Text>
            {section.description && (
              <Text as="p" size="sm" className="mt-[var(--laurel-space-1)] text-[var(--laurel-text-muted)]">
                {section.description}
              </Text>
            )}
          </div>
          <div className="space-y-[var(--laurel-space-4)]">{section.content}</div>
        </div>
      ))}

      <div className="flex items-center justify-end gap-[var(--laurel-space-3)] mt-[var(--laurel-space-8)] pt-[var(--laurel-space-4)] border-t border-[var(--laurel-border-subtle)]">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            {cancelLabel}
          </Button>
        )}
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving...' : submitLabel}
        </Button>
      </div>
    </form>
  ),
);

SettingsForm.displayName = 'SettingsForm';

export { SettingsForm };
