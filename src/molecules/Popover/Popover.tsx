import { useState, useRef, useCallback, useEffect, cloneElement } from 'react';
import type { PopoverProps } from './Popover.types';

const placementClasses: Record<string, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-[var(--laurel-space-2)]',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-[var(--laurel-space-2)]',
  left: 'right-full top-1/2 -translate-y-1/2 mr-[var(--laurel-space-2)]',
  right: 'left-full top-1/2 -translate-y-1/2 ml-[var(--laurel-space-2)]',
};

const Popover = ({ trigger, children, open: controlledOpen, onOpenChange, placement = 'bottom', className = '' }: PopoverProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const containerRef = useRef<HTMLDivElement>(null);

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange],
  );

  const handleTriggerClick = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen, setOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, setOpen]);

  const triggerElement = cloneElement(trigger, {
    onClick: (e: React.MouseEvent) => {
      handleTriggerClick();
      trigger.props.onClick?.(e);
    },
    'aria-expanded': isOpen,
    'aria-haspopup': 'dialog' as const,
  });

  return (
    <div ref={containerRef} className="relative inline-block">
      {triggerElement}
      {isOpen && (
        <div
          role="dialog"
          className={[
            'absolute z-50',
            'rounded-[var(--laurel-radius-lg)] border border-[var(--laurel-border-subtle)] bg-[var(--laurel-bg-surface)] shadow-[var(--laurel-shadow-lg)]',
            'p-[var(--laurel-space-4)]',
            'font-[family-name:var(--laurel-font-sans)]',
            placementClasses[placement],
            className,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {children}
        </div>
      )}
    </div>
  );
};

Popover.displayName = 'Popover';

export { Popover };
