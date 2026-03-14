import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import { Avatar } from '../../atoms/Avatar';
import { Divider } from '../../atoms/Divider';
import type { ProfileTemplateProps } from './ProfileTemplate.types';

const ProfileTemplate = forwardRef<HTMLDivElement, ProfileTemplateProps>(
  (
    {
      name,
      avatar,
      bio,
      coverImage,
      stats,
      actions,
      children,
      tabs,
      activeTab,
      onTabChange,
      className = '',
      ...rest
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {/* Cover image */}
      <div
        className="h-48 bg-[var(--laurel-bg-brand-subtle)]"
        style={
          coverImage
            ? { backgroundImage: `url(${coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
            : undefined
        }
        role="img"
        aria-label={`${name} cover image`}
      />

      {/* Profile info */}
      <div className="px-[var(--laurel-space-6)] -mt-12">
        <div className="flex items-end gap-[var(--laurel-space-4)]">
          <div className="rounded-full border-4 border-[var(--laurel-ring-on-surface)]">
            {avatar || <Avatar initials={name.charAt(0)} size="lg" />}
          </div>

          <div className="flex-1 pt-14">
            <Text as="h1" size="xl" weight="bold">
              {name}
            </Text>
            {bio && (
              <Text as="p" size="sm" className="text-[var(--laurel-text-muted)] mt-[var(--laurel-space-1)]">
                {bio}
              </Text>
            )}
          </div>

          {actions && <div className="flex gap-[var(--laurel-space-2)]">{actions}</div>}
        </div>

        {/* Stats row */}
        {stats && stats.length > 0 && (
          <div className="flex gap-[var(--laurel-space-6)] mt-[var(--laurel-space-4)]">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <Text as="p" size="lg" weight="bold">
                  {stat.value}
                </Text>
                <Text as="p" size="xs" className="text-[var(--laurel-text-muted)]">
                  {stat.label}
                </Text>
              </div>
            ))}
          </div>
        )}
      </div>

      <Divider className="mt-[var(--laurel-space-4)]" />

      {/* Tabs */}
      {tabs && tabs.length > 0 && (
        <nav className="flex border-b border-[var(--laurel-border-subtle)]" aria-label="Profile sections">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange?.(tab.id)}
              className={[
                'px-[var(--laurel-space-4)] py-[var(--laurel-space-3)] text-[length:var(--laurel-font-size-sm)] border-b-2 bg-transparent cursor-pointer',
                activeTab === tab.id
                  ? 'border-[var(--laurel-border-brand)] text-[var(--laurel-text-brand)] font-[var(--laurel-font-weight-semibold)]'
                  : 'border-transparent text-[var(--laurel-text-muted)] hover:text-[var(--laurel-text-secondary)]',
              ].join(' ')}
              aria-selected={activeTab === tab.id}
              role="tab"
            >
              {tab.label}
            </button>
          ))}
        </nav>
      )}

      {/* Content */}
      <div className="p-[var(--laurel-space-6)]">{children}</div>
    </div>
  ),
);

ProfileTemplate.displayName = 'ProfileTemplate';

export { ProfileTemplate };
