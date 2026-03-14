import { forwardRef, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { ContextMenuProps } from './ContextMenu.types';

const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>(
  ({ children, items, className = '', ...rest }, ref) => {
    const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleContextMenu = (e: React.MouseEvent) => {
      e.preventDefault();
      setPos({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
      if (!pos) return;
      const close = (e: MouseEvent) => {
        if (menuRef.current && menuRef.current.contains(e.target as Node)) return;
        setPos(null);
      };
      const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setPos(null); };
      document.addEventListener('mousedown', close);
      document.addEventListener('keydown', handleKey);
      return () => {
        document.removeEventListener('mousedown', close);
        document.removeEventListener('keydown', handleKey);
      };
    }, [pos]);

    const menu = pos && createPortal(
      <div
        ref={menuRef}
        role="menu"
        className={[
          'fixed z-50',
          'min-w-[160px] py-[var(--laurel-space-1)]',
          'bg-[var(--laurel-bg-surface)] border border-[var(--laurel-border-subtle)]',
          'rounded-[var(--laurel-radius-lg)] shadow-lg',
          'font-[family-name:var(--laurel-font-sans)]',
        ].join(' ')}
        style={{ left: pos.x, top: pos.y }}
      >
        {items.map((item, i) =>
          item.separator ? (
            <div key={i} role="separator" className="my-[var(--laurel-space-1)] h-px bg-[var(--laurel-bg-subtle)]" />
          ) : (
            <button
              key={i}
              type="button"
              role="menuitem"
              disabled={item.disabled}
              onClick={() => {
                item.onClick?.();
                setPos(null);
              }}
              className={[
                'block w-full px-[var(--laurel-space-3)] py-[var(--laurel-space-1-5)]',
                'text-left text-[length:var(--laurel-font-size-sm)] text-[var(--laurel-text-secondary)]',
                'hover:bg-[var(--laurel-bg-subtle)] cursor-pointer',
                'disabled:opacity-50 disabled:cursor-not-allowed',
              ].join(' ')}
            >
              {item.label}
            </button>
          ),
        )}
      </div>,
      document.body,
    );

    return (
      <div ref={ref} onContextMenu={handleContextMenu} className={className} {...rest}>
        {children}
        {menu}
      </div>
    );
  },
);

ContextMenu.displayName = 'ContextMenu';

export { ContextMenu };
