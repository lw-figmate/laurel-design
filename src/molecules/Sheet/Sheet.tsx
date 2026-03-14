import { forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { SheetProps } from './Sheet.types';

const Sheet = forwardRef<HTMLDivElement, SheetProps>(
  ({ open, onClose, title, children, className = '', ...rest }, ref) => {
    useEffect(() => {
      if (!open) return;
      document.body.style.overflow = 'hidden';
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleKey);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKey);
      };
    }, [open, onClose]);

    if (!open) return null;

    return createPortal(
      <div className="fixed inset-0 z-50 flex flex-col justify-end" role="presentation">
        <div className="fixed inset-0 bg-[var(--laurel-bg-overlay)] transition-opacity" onClick={onClose} aria-hidden="true" />
        <div
          ref={ref}
          role="dialog"
          aria-label={title ?? 'Sheet'}
          className={[
            'relative z-10 bg-[var(--laurel-bg-surface)]',
            'rounded-t-[var(--laurel-radius-xl)]',
            'shadow-lg max-h-[85vh] overflow-y-auto',
            'font-[family-name:var(--laurel-font-sans)]',
            'animate-[slideUp_0.3s_ease-out]',
            className,
          ].filter(Boolean).join(' ')}
          {...rest}
        >
          <div className="flex items-center justify-center pt-[var(--laurel-space-2)]">
            <div className="w-10 h-1 rounded-full bg-[var(--laurel-bg-control)]" />
          </div>
          {title && (
            <div className="px-[var(--laurel-space-6)] pt-[var(--laurel-space-4)] pb-[var(--laurel-space-2)]">
              <h2 className="text-[length:var(--laurel-font-size-lg)] font-[var(--laurel-font-weight-semibold)] text-[var(--laurel-text-heading)]">
                {title}
              </h2>
            </div>
          )}
          <div className="px-[var(--laurel-space-6)] py-[var(--laurel-space-4)]">
            {children}
          </div>
        </div>
      </div>,
      document.body,
    );
  },
);

Sheet.displayName = 'Sheet';

export { Sheet };
