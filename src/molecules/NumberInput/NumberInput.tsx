import { forwardRef, useState, useCallback } from 'react';
import type { NumberInputProps } from './NumberInput.types';

const sizeClasses: Record<string, string> = {
  sm: 'h-8 text-[length:var(--laurel-font-size-sm)]',
  md: 'h-10 text-[length:var(--laurel-font-size-sm)]',
  lg: 'h-12 text-[length:var(--laurel-font-size-base)]',
};

const btnSizeClasses: Record<string, string> = {
  sm: 'w-8',
  md: 'w-10',
  lg: 'w-12',
};

const NumberInput = forwardRef<HTMLDivElement, NumberInputProps>(
  ({
    value: valueProp,
    defaultValue = 0,
    min = -Infinity,
    max = Infinity,
    step = 1,
    onValueChange,
    disabled = false,
    size = 'md',
    label,
    className = '',
    ...rest
  }, ref) => {
    const [internal, setInternal] = useState(defaultValue);
    const value = valueProp ?? internal;

    const update = useCallback((next: number) => {
      const clamped = Math.min(max, Math.max(min, next));
      if (valueProp === undefined) setInternal(clamped);
      onValueChange?.(clamped);
    }, [valueProp, min, max, onValueChange]);

    return (
      <div
        ref={ref}
        className={['inline-flex items-center font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
        {...rest}
      >
        <button
          type="button"
          aria-label="Decrement"
          disabled={disabled || value <= min}
          onClick={() => update(value - step)}
          className={[
            btnSizeClasses[size],
            sizeClasses[size],
            'inline-flex items-center justify-center',
            'border border-r-0 border-[var(--laurel-border-default)]',
            'rounded-l-[var(--laurel-radius-md)]',
            'bg-[var(--laurel-bg-muted)] text-[var(--laurel-text-secondary)]',
            'hover:bg-[var(--laurel-bg-subtle)] disabled:opacity-50 disabled:cursor-not-allowed',
            'cursor-pointer transition-colors',
          ].join(' ')}
        >
          −
        </button>
        <input
          type="text"
          inputMode="numeric"
          role="spinbutton"
          aria-label={label}
          aria-valuenow={value}
          aria-valuemin={min === -Infinity ? undefined : min}
          aria-valuemax={max === Infinity ? undefined : max}
          value={value}
          disabled={disabled}
          onChange={(e) => {
            const num = Number(e.target.value);
            if (!Number.isNaN(num)) update(num);
          }}
          className={[
            sizeClasses[size],
            'w-16 text-center border-y border-[var(--laurel-border-default)]',
            'bg-[var(--laurel-bg-surface)] text-[var(--laurel-text-heading)]',
            'focus:outline-none focus:border-[var(--laurel-border-brand)]',
            'disabled:opacity-50 disabled:cursor-not-allowed',
          ].join(' ')}
        />
        <button
          type="button"
          aria-label="Increment"
          disabled={disabled || value >= max}
          onClick={() => update(value + step)}
          className={[
            btnSizeClasses[size],
            sizeClasses[size],
            'inline-flex items-center justify-center',
            'border border-l-0 border-[var(--laurel-border-default)]',
            'rounded-r-[var(--laurel-radius-md)]',
            'bg-[var(--laurel-bg-muted)] text-[var(--laurel-text-secondary)]',
            'hover:bg-[var(--laurel-bg-subtle)] disabled:opacity-50 disabled:cursor-not-allowed',
            'cursor-pointer transition-colors',
          ].join(' ')}
        >
          +
        </button>
      </div>
    );
  },
);

NumberInput.displayName = 'NumberInput';

export { NumberInput };
