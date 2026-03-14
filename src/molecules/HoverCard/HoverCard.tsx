import { forwardRef, useState, useRef, useCallback } from 'react';
import type { HoverCardProps } from './HoverCard.types';

const HoverCard = forwardRef<HTMLDivElement, HoverCardProps>(
  ({ trigger, children, openDelay = 200, closeDelay = 300, className = '', ...rest }, ref) => {
    const [open, setOpen] = useState(false);
    const openTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
    const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

    const handleEnter = useCallback(() => {
      clearTimeout(closeTimer.current);
      openTimer.current = setTimeout(() => setOpen(true), openDelay);
    }, [openDelay]);

    const handleLeave = useCallback(() => {
      clearTimeout(openTimer.current);
      closeTimer.current = setTimeout(() => setOpen(false), closeDelay);
    }, [closeDelay]);

    return (
      <div
        ref={ref}
        className={['relative inline-block', className].filter(Boolean).join(' ')}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        {...rest}
      >
        <div>{trigger}</div>
        {open && (
          <div
            role="tooltip"
            className={[
              'absolute z-50 mt-[var(--laurel-space-2)] left-0',
              'min-w-[240px] p-[var(--laurel-space-4)]',
              'bg-[var(--laurel-bg-surface)] border border-[var(--laurel-border-subtle)]',
              'rounded-[var(--laurel-radius-lg)] shadow-lg',
              'font-[family-name:var(--laurel-font-sans)]',
              'text-[length:var(--laurel-font-size-sm)] text-[var(--laurel-text-secondary)]',
            ].join(' ')}
          >
            {children}
          </div>
        )}
      </div>
    );
  },
);

HoverCard.displayName = 'HoverCard';

export { HoverCard };
