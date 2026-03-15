import { forwardRef, useState, useCallback } from 'react';
import type { CollapsibleProps } from './Collapsible.types';

const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ trigger, open: controlledOpen, defaultOpen = false, onOpenChange, children, className = '', ...rest }, ref) => {
    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : internalOpen;

    const toggle = useCallback(() => {
      const next = !isOpen;
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    }, [isOpen, isControlled, onOpenChange]);

    return (
      <div ref={ref} className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')} {...rest}>
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={toggle}
          className="flex items-center gap-[var(--laurel-space-2)] cursor-pointer w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--laurel-ring-brand)] rounded-[var(--laurel-radius-md)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={['h-4 w-4 shrink-0 text-[var(--laurel-text-muted)] transition-transform duration-[var(--laurel-duration-normal)]', isOpen && 'rotate-90'].filter(Boolean).join(' ')}
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
          {trigger}
        </button>
        {isOpen && (
          <div className="pl-[var(--laurel-space-6)] pt-[var(--laurel-space-2)]">
            {children}
          </div>
        )}
      </div>
    );
  },
);

Collapsible.displayName = 'Collapsible';

export { Collapsible };
