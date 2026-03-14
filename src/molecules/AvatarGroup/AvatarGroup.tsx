import { forwardRef, Children, isValidElement } from 'react';
import { Avatar } from '../../atoms/Avatar';
import type { AvatarGroupProps } from './AvatarGroup.types';

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ max = 5, size = 'md', children, className = '', ...rest }, ref) => {
    const items = Children.toArray(children).filter(isValidElement);
    const visible = items.slice(0, max);
    const overflow = items.length - max;

    return (
      <div
        ref={ref}
        className={['flex -space-x-2 font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {visible.map((child, i) => (
          <div key={i} className="ring-2 ring-[var(--laurel-ring-on-surface)] rounded-full">
            {child}
          </div>
        ))}
        {overflow > 0 && (
          <div className="ring-2 ring-[var(--laurel-ring-on-surface)] rounded-full">
            <Avatar initials={`+${overflow}`} size={size} />
          </div>
        )}
      </div>
    );
  },
);

AvatarGroup.displayName = 'AvatarGroup';

export { AvatarGroup };
