import { useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Text } from '../../atoms/Text';
import type { DrawerProps } from './Drawer.types';

const placementClasses: Record<string, { enter: string; panel: string }> = {
  left: {
    enter: 'justify-start',
    panel: 'max-w-sm',
  },
  right: {
    enter: 'justify-end',
    panel: 'max-w-sm',
  },
};

const Drawer = ({ open, onClose, placement = 'right', title, children, className = '' }: DrawerProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      panelRef.current?.focus();
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [open, handleKeyDown]);

  if (!open) return null;

  const styles = placementClasses[placement];

  return createPortal(
    <div className={['fixed inset-0 z-50 flex', styles.enter].join(' ')}>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-[var(--laurel-bg-overlay)] transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className={[
          'relative z-10 flex h-full w-full flex-col',
          'bg-[var(--laurel-bg-surface)] shadow-[var(--laurel-shadow-xl)]',
          'font-[family-name:var(--laurel-font-sans)]',
          styles.panel,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {title && (
          <div className="flex items-center justify-between shrink-0 px-[var(--laurel-space-6)] py-[var(--laurel-space-4)] border-b border-[var(--laurel-border-subtle)]">
            <Text as="strong" size="lg" weight="semibold">
              {title}
            </Text>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="rounded-[var(--laurel-radius-md)] p-[var(--laurel-space-1)] hover:bg-[var(--laurel-bg-subtle)] transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
          </div>
        )}
        <div className="flex-1 overflow-y-auto px-[var(--laurel-space-6)] py-[var(--laurel-space-4)]">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
};

Drawer.displayName = 'Drawer';

export { Drawer };
