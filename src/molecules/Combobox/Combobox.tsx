import { forwardRef, useState, useRef, useCallback, useEffect } from 'react';
import { Text } from '../../atoms/Text';
import type { ComboboxProps } from './Combobox.types';

const sizeClasses: Record<string, string> = {
  sm: 'h-8 text-[length:var(--laurel-font-size-xs)]',
  md: 'h-10 text-[length:var(--laurel-font-size-sm)]',
  lg: 'h-12 text-[length:var(--laurel-font-size-base)]',
};

const Combobox = forwardRef<HTMLDivElement, ComboboxProps>(
  ({ placeholder, options, value, onValueChange, onInputChange, size = 'md', disabled = false, error = false, emptyMessage = 'No results found', className = '', ...rest }, ref) => {
    const [inputText, setInputText] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [highlightIndex, setHighlightIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const filtered = options.filter((o) => o.label.toLowerCase().includes(inputText.toLowerCase()));

    const selectedOption = options.find((o) => o.value === value);

    const handleSelect = useCallback(
      (optionValue: string) => {
        const opt = options.find((o) => o.value === optionValue);
        onValueChange?.(optionValue);
        setInputText(opt?.label ?? '');
        setIsOpen(false);
        setHighlightIndex(-1);
      },
      [options, onValueChange],
    );

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
        onInputChange?.(e.target.value);
        setIsOpen(true);
        setHighlightIndex(-1);
      },
      [onInputChange],
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setIsOpen(true);
          setHighlightIndex((prev) => Math.min(prev + 1, filtered.length - 1));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setHighlightIndex((prev) => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter' && highlightIndex >= 0) {
          e.preventDefault();
          const opt = filtered[highlightIndex];
          if (opt && !opt.disabled) handleSelect(opt.value);
        } else if (e.key === 'Escape') {
          setIsOpen(false);
          setHighlightIndex(-1);
        }
      },
      [filtered, highlightIndex, handleSelect],
    );

    // Click outside
    useEffect(() => {
      const handler = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handler);
      return () => document.removeEventListener('mousedown', handler);
    }, []);

    // Sync display text with controlled value
    useEffect(() => {
      if (selectedOption && !isOpen) {
        setInputText(selectedOption.label);
      }
    }, [selectedOption, isOpen]);

    return (
      <div ref={ref} className={['relative font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')} {...rest}>
        <div ref={containerRef}>
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded={isOpen}
            aria-autocomplete="list"
            aria-controls="combobox-listbox"
            aria-activedescendant={highlightIndex >= 0 ? `combobox-option-${highlightIndex}` : undefined}
            placeholder={placeholder}
            value={inputText}
            onChange={handleInputChange}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            className={[
              'w-full rounded-[var(--laurel-radius-md)] border px-[var(--laurel-space-3)]',
              'focus:outline-none focus:ring-2 focus:ring-[var(--laurel-ring-brand)]',
              'disabled:cursor-not-allowed disabled:opacity-50',
              error ? 'border-[var(--laurel-border-error)]' : 'border-[var(--laurel-border-default)]',
              sizeClasses[size],
            ].join(' ')}
          />

          {isOpen && (
            <ul
              ref={listRef}
              id="combobox-listbox"
              role="listbox"
              className="absolute z-50 mt-[var(--laurel-space-1)] w-full max-h-60 overflow-auto rounded-[var(--laurel-radius-lg)] border border-[var(--laurel-border-subtle)] bg-[var(--laurel-bg-surface)] py-[var(--laurel-space-1)] shadow-[var(--laurel-shadow-lg)]"
            >
              {filtered.length === 0 ? (
                <li className="px-[var(--laurel-space-3)] py-[var(--laurel-space-2)] text-[var(--laurel-text-muted)]">
                  <Text as="span" size="sm">{emptyMessage}</Text>
                </li>
              ) : (
                filtered.map((option, i) => (
                  <li
                    key={option.value}
                    id={`combobox-option-${i}`}
                    role="option"
                    aria-selected={option.value === value}
                    aria-disabled={option.disabled}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      if (!option.disabled) handleSelect(option.value);
                    }}
                    className={[
                      'px-[var(--laurel-space-3)] py-[var(--laurel-space-2)] text-[length:var(--laurel-font-size-sm)] cursor-pointer',
                      i === highlightIndex && 'bg-[var(--laurel-bg-brand-muted)]',
                      option.value === value && 'font-[var(--laurel-font-weight-medium)]',
                      option.disabled && 'opacity-50 cursor-not-allowed',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {option.label}
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      </div>
    );
  },
);

Combobox.displayName = 'Combobox';

export { Combobox };
