import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import { Avatar } from '../../atoms/Avatar';
import { Divider } from '../../atoms/Divider';
import { Card, CardBody } from '../../molecules/Card';
import type { ProfileCardProps } from './ProfileCard.types';

const ProfileCard = forwardRef<HTMLDivElement, ProfileCardProps>(
  ({ avatarSrc, initials, name, role, bio, stats, actions, className = '', ...rest }, ref) => (
    <Card ref={ref} className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')} {...rest}>
      <CardBody className="flex flex-col items-center text-center p-[var(--laurel-space-6)]">
        <Avatar src={avatarSrc} initials={initials} size="xl" className="mb-[var(--laurel-space-4)]" />

        <Text as="h3" size="lg" weight="semibold">
          {name}
        </Text>

        {role && (
          <Text as="p" size="sm" className="text-[var(--laurel-text-muted)] mt-[var(--laurel-space-1)]">
            {role}
          </Text>
        )}

        {bio && (
          <Text as="p" size="sm" className="text-[var(--laurel-text-tertiary)] mt-[var(--laurel-space-3)] max-w-xs">
            {bio}
          </Text>
        )}

        {stats && stats.length > 0 && (
          <>
            <Divider className="my-[var(--laurel-space-4)] w-full" />
            <div className="flex justify-center gap-[var(--laurel-space-6)]">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <Text as="span" size="lg" weight="bold" className="block">
                    {stat.value}
                  </Text>
                  <Text as="span" size="xs" className="text-[var(--laurel-text-muted)]">
                    {stat.label}
                  </Text>
                </div>
              ))}
            </div>
          </>
        )}

        {actions && <div className="flex gap-[var(--laurel-space-3)] mt-[var(--laurel-space-4)]">{actions}</div>}
      </CardBody>
    </Card>
  ),
);

ProfileCard.displayName = 'ProfileCard';

export { ProfileCard };
