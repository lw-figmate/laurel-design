import { forwardRef, useState, useRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import type { CommandPaletteProps, CommandItem } from './CommandPalette.types';

const CommandPalette = forwardRef<HTMLDivElement, CommandPaletteProps>(
  ({ open, onClose, commands, onSelect, placeholder = 'Search commands...', className = '', ...rest }, ref) => {
    const [query, setQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const filtered = useMemo(() => {
      if (!query) return commands;
      const lower = query.toLowerCase();
      return commands.filter(
        (c) => c.label.toLowerCase().includes(lower) || c.description?.toLowerCase().includes(lower),
      );
    }, [commands, query]);

    const groups = useMemo(() => {
      const map = new Map<string, CommandItem[]>();
      for (const cmd of filtered) {
        const group = cmd.group ?? '';
        if (!map.has(group)) map.set(group, []);
        map.get(group)!.push(cmd);
      }
      return map;
    }, [filtered]);

    useEffect(() => {
      if (open) {
        setQuery('');
        setActiveIndex(0);
        setTimeout(() => inputRef.current?.focus(), 0);
      }
    }, [open]);

    useEffect(() => {
      setActiveIndex(0);
    }, [query]);

    useEffect(() => {
      if (!open) return;
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleKey);
      return () => document.removeEventListener('keydown', handleKey);
    }, [open, onClose]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => Math.min(prev + 1, filtered.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && filtered[activeIndex]) {
        onSelect(filtered[activeIndex]);
        onClose();
      }
    };

    if (!open) return null;

    return createPortal(
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-[var(--laurel-bg-overlay)]" onClick={onClose} role="presentation">
        <div
          ref={ref}
          role="dialog"
          aria-label="Command palette"
          className={[
            'w-full max-w-lg',
            'bg-[var(--laurel-bg-surface)] border border-[var(--laurel-border-subtle)]',
            'rounded-[var(--laurel-radius-lg)] shadow-2xl overflow-hidden',
            'font-[family-name:var(--laurel-font-sans)]',
            className,
          ].filter(Boolean).join(' ')}
          onClick={(e) => e.stopPropagation()}
          {...rest}
        >
          <div className="border-b border-[var(--laurel-border-muted)] p-[var(--laurel-space-3)]">
            <input
              ref={inputRef}
              type="text"
              placeholder={placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className={[
                'w-full bg-transparent outline-none',
                'text-[length:var(--laurel-font-size-sm)] text-[var(--laurel-text-heading)]',
                'placeholder:text-[var(--laurel-text-placeholder)]',
              ].join(' ')}
            />
          </div>
          <div className="max-h-[300px] overflow-y-auto p-[var(--laurel-space-2)]" role="listbox">
            {filtered.length === 0 && (
              <div className="px-[var(--laurel-space-3)] py-[var(--laurel-space-4)] text-center text-[length:var(--laurel-font-size-sm)] text-[var(--laurel-text-placeholder)]">
                No results found.
              </div>
            )}
            {[...groups.entries()].map(([group, items]) => (
              <div key={group}>
                {group && (
                  <div className="px-[var(--laurel-space-3)] py-[var(--laurel-space-1)] text-[length:var(--laurel-font-size-xs)] font-[var(--laurel-font-weight-semibold)] text-[var(--laurel-text-placeholder)] uppercase">
                    {group}
                  </div>
                )}
                {items.map((cmd) => {
                  const idx = filtered.indexOf(cmd);
                  return (
                    <button
                      key={cmd.id}
                      type="button"
                      role="option"
                      aria-selected={idx === activeIndex}
                      onClick={() => { onSelect(cmd); onClose(); }}
                      className={[
                        'flex items-center justify-between w-full',
                        'px-[var(--laurel-space-3)] py-[var(--laurel-space-2)]',
                        'rounded-[var(--laurel-radius-md)] text-left cursor-pointer',
                        'text-[length:var(--laurel-font-size-sm)]',
                        idx === activeIndex
                          ? 'bg-[var(--laurel-bg-brand-muted)] text-[var(--laurel-text-brand)]'
                          : 'text-[var(--laurel-text-secondary)] hover:bg-[var(--laurel-bg-subtle)]',
                      ].join(' ')}
                    >
                      <span className="flex items-center gap-[var(--laurel-space-2)]">
                        {cmd.icon && <span className="flex-shrink-0">{cmd.icon}</span>}
                        <span>
                          <span className="block">{cmd.label}</span>
                          {cmd.description && (
                            <span className="block text-[length:var(--laurel-font-size-xs)] text-[var(--laurel-text-placeholder)]">
                              {cmd.description}
                            </span>
                          )}
                        </span>
                      </span>
                      {cmd.shortcut && (
                        <span className="text-[length:var(--laurel-font-size-xs)] text-[var(--laurel-text-placeholder)]">
                          {cmd.shortcut}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>,
      document.body,
    );
  },
);

CommandPalette.displayName = 'CommandPalette';

export { CommandPalette };
