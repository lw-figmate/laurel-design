import { forwardRef, Children, isValidElement } from 'react';
import { Text } from '../../atoms/Text';
import type { TimelineProps, TimelineItemProps } from './Timeline.types';

const variantColors: Record<string, string> = {
  default: 'bg-[var(--laurel-bg-control-hover)]',
  primary: 'bg-[var(--laurel-bg-brand)]',
  success: 'bg-[var(--laurel-bg-success)]',
  warning: 'bg-[var(--laurel-bg-warning)]',
  error: 'bg-[var(--laurel-bg-danger)]',
};

const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  ({ children, className = '', ...rest }, ref) => {
    const items = Children.toArray(children).filter(isValidElement);

    return (
      <div ref={ref} className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')} {...rest}>
        {items.map((child, index) => (
          <div key={index} className="relative flex gap-[var(--laurel-space-4)]">
            {/* Left column: marker + line */}
            <div className="flex flex-col items-center">
              {/* Marker */}
              {isValidElement<TimelineItemProps>(child) && child.props.icon ? (
                <div className="shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-[var(--laurel-bg-subtle)]">
                  {child.props.icon}
                </div>
              ) : (
                <div
                  className={[
                    'shrink-0 h-3 w-3 rounded-full mt-1.5',
                    variantColors[(child as React.ReactElement<TimelineItemProps>).props.variant ?? 'default'],
                  ].join(' ')}
                />
              )}
              {/* Connector line */}
              {index < items.length - 1 && (
                <div className="w-0.5 flex-1 bg-[var(--laurel-bg-accent)]" />
              )}
            </div>

            {/* Right column: content */}
            <div className="pb-[var(--laurel-space-6)] min-w-0">
              {child}
            </div>
          </div>
        ))}
      </div>
    );
  },
);

Timeline.displayName = 'Timeline';

const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ title, description, icon: _icon, variant: _variant, className = '', children, ...rest }, ref) => {
    return (
      <div ref={ref} className={className} {...rest}>
        <Text as="span" size="sm" weight="medium">
          {title}
        </Text>
        {description && (
          <Text as="span" size="xs" className="block text-[var(--laurel-text-muted)]">
            {description}
          </Text>
        )}
        {children && <div className="mt-[var(--laurel-space-2)]">{children}</div>}
      </div>
    );
  },
);

TimelineItem.displayName = 'TimelineItem';

export { Timeline, TimelineItem };
