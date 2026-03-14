import { useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Text } from '../../atoms/Text';
import type { DialogProps } from './Dialog.types';

const Dialog = ({ open, onClose, title, children, className = '' }: DialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      dialogRef.current?.focus();
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [open, handleKeyDown]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-[var(--laurel-bg-overlay)] transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className={[
          'relative z-10 w-full max-w-lg mx-[var(--laurel-space-4)]',
          'rounded-[var(--laurel-radius-xl)] bg-[var(--laurel-bg-surface)] shadow-[var(--laurel-shadow-xl)]',
          'font-[family-name:var(--laurel-font-sans)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {title && (
          <div className="flex items-center justify-between px-[var(--laurel-space-6)] pt-[var(--laurel-space-6)] pb-[var(--laurel-space-2)]">
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
        <div className="px-[var(--laurel-space-6)] py-[var(--laurel-space-4)]">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
};

Dialog.displayName = 'Dialog';

export { Dialog };
