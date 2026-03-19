import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import type { StatProps } from './Stat.types';

const Stat = forwardRef<HTMLDivElement, StatProps>(
  ({ label, value, helpText, trend, icon, className = '', ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
        {...rest}
      >
        <div className="flex items-center gap-[var(--laurel-space-2)]">
          {icon && <div className="text-[var(--laurel-text-placeholder)]">{icon}</div>}
          <Text as="span" size="sm" className="text-[var(--laurel-text-muted)]">
            {label}
          </Text>
        </div>
        <Text as="span" size="2xl" weight="bold" className="block mt-[var(--laurel-space-1)]">
          {value}
        </Text>
        {helpText && (
          <div className="flex items-center gap-[var(--laurel-space-1)] mt-[var(--laurel-space-1)]">
            {trend && trend !== 'none' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={[
                  'h-4 w-4',
                  trend === 'up' ? 'text-[var(--laurel-text-success)]' : 'text-[var(--laurel-text-error)]',
                  trend === 'down' && 'rotate-180',
                ].filter(Boolean).join(' ')}
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M12.577 4.878a.75.75 0 0 1 .919-.53l4.78 1.281a.75.75 0 0 1 .531.919l-1.281 4.78a.75.75 0 0 1-1.449-.387l.81-3.022a19.407 19.407 0 0 1-5.594 5.203c-2.127 1.364-4.513 2.159-6.96 2.159H4a.75.75 0 0 1 0-1.5h.333c2.097 0 4.134-.695 5.99-1.885a17.91 17.91 0 0 0 5.116-4.744l-2.863.766a.75.75 0 0 1-.919-.53l-.08-.3Z" clipRule="evenodd" />
              </svg>
            )}
            <Text as="span" size="xs" className="text-[var(--laurel-text-muted)]">
              {helpText}
            </Text>
          </div>
        )}
      </div>
    );
  },
);

Stat.displayName = 'Stat';

export { Stat };
