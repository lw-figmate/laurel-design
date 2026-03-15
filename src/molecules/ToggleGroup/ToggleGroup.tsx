import { forwardRef, createContext, useContext, useState, useCallback } from 'react';
import type { ToggleGroupProps, ToggleGroupItemProps } from './ToggleGroup.types';

interface ToggleGroupContextValue {
  selected: string[];
  toggle: (value: string) => void;
  size: string;
}

const ToggleGroupContext = createContext<ToggleGroupContextValue | null>(null);

function useToggleGroupContext() {
  const ctx = useContext(ToggleGroupContext);
  if (!ctx) throw new Error('ToggleGroupItem must be used within <ToggleGroup>');
  return ctx;
}

function normalize(v: string | string[] | undefined): string[] {
  if (!v) return [];
  return Array.isArray(v) ? v : [v];
}

const ToggleGroup = forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ value: controlledValue, defaultValue, onValueChange, multiple = false, size = 'md', children, className = '', ...rest }, ref) => {
    const [internalValue, setInternalValue] = useState<string[]>(normalize(defaultValue));
    const isControlled = controlledValue !== undefined;
    const selected = isControlled ? normalize(controlledValue) : internalValue;

    const toggle = useCallback(
      (itemValue: string) => {
        let next: string[];
        if (selected.includes(itemValue)) {
          next = selected.filter((v) => v !== itemValue);
        } else {
          next = multiple ? [...selected, itemValue] : [itemValue];
        }
        if (!isControlled) setInternalValue(next);
        onValueChange?.(multiple ? next : (next[0] ?? ''));
      },
      [selected, multiple, isControlled, onValueChange],
    );

    return (
      <ToggleGroupContext.Provider value={{ selected, toggle, size }}>
        <div
          ref={ref}
          role="group"
          className={[
            'inline-flex rounded-[var(--laurel-radius-lg)] border border-[var(--laurel-border-subtle)] overflow-hidden',
            'font-[family-name:var(--laurel-font-sans)]',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          {...rest}
        >
          {children}
        </div>
      </ToggleGroupContext.Provider>
    );
  },
);

ToggleGroup.displayName = 'ToggleGroup';

const sizeClasses: Record<string, string> = {
  sm: 'px-[var(--laurel-space-2)] py-[var(--laurel-space-1)] text-[length:var(--laurel-font-size-xs)]',
  md: 'px-[var(--laurel-space-3)] py-[var(--laurel-space-1-5)] text-[length:var(--laurel-font-size-sm)]',
  lg: 'px-[var(--laurel-space-4)] py-[var(--laurel-space-2)] text-[length:var(--laurel-font-size-base)]',
};

const ToggleGroupItem = forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ value, disabled, children, className = '', ...rest }, ref) => {
    const { selected, toggle, size } = useToggleGroupContext();
    const isActive = selected.includes(value);

    return (
      <button
        ref={ref}
        type="button"
        role="radio"
        aria-checked={isActive}
        aria-pressed={isActive}
        disabled={disabled}
        onClick={() => toggle(value)}
        className={[
          'inline-flex items-center justify-center border-r border-[var(--laurel-border-subtle)] last:border-r-0',
          'transition-colors cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--laurel-ring-brand)]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          sizeClasses[size],
          isActive
            ? 'bg-[var(--laurel-bg-brand)] text-[var(--laurel-text-on-brand)]'
            : 'bg-[var(--laurel-bg-surface)] text-[var(--laurel-text-secondary)] hover:bg-[var(--laurel-bg-muted)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

ToggleGroupItem.displayName = 'ToggleGroupItem';

export { ToggleGroup, ToggleGroupItem };
