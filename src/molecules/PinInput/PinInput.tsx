import { forwardRef, useState, useRef, useCallback } from 'react';
import type { PinInputProps } from './PinInput.types';

const sizeClasses: Record<string, string> = {
  sm: 'h-8 w-8 text-[length:var(--laurel-font-size-sm)]',
  md: 'h-10 w-10 text-[length:var(--laurel-font-size-base)]',
  lg: 'h-12 w-12 text-[length:var(--laurel-font-size-lg)]',
};

const PinInput = forwardRef<HTMLDivElement, PinInputProps>(
  ({
    length = 4,
    value: valueProp,
    onValueChange,
    onComplete,
    mask = false,
    disabled = false,
    size = 'md',
    className = '',
    ...rest
  }, ref) => {
    const [internal, setInternal] = useState(() => ''.padEnd(length, ''));
    const value = valueProp ?? internal;
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const update = useCallback((newValue: string) => {
      if (valueProp === undefined) setInternal(newValue);
      onValueChange?.(newValue);
      if (newValue.replace(/ /g, '').length === length) {
        onComplete?.(newValue);
      }
    }, [valueProp, length, onValueChange, onComplete]);

    const handleChange = (index: number, char: string) => {
      if (!/^[a-zA-Z0-9]?$/.test(char)) return;
      const arr = value.split('');
      arr[index] = char || ' ';
      const next = arr.join('');
      update(next);
      if (char && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
      if (e.key === 'Backspace' && !value[index]?.trim() && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData('text').slice(0, length);
      const padded = pasted.padEnd(length, ' ');
      update(padded);
      const focusIdx = Math.min(pasted.length, length - 1);
      inputRefs.current[focusIdx]?.focus();
    };

    return (
      <div
        ref={ref}
        className={['inline-flex gap-[var(--laurel-space-2)] font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {Array.from({ length }, (_, i) => (
          <input
            key={i}
            ref={(el) => { inputRefs.current[i] = el; }}
            type={mask ? 'password' : 'text'}
            inputMode="text"
            maxLength={1}
            aria-label={`Pin digit ${i + 1}`}
            value={value[i]?.trim() ?? ''}
            disabled={disabled}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onPaste={i === 0 ? handlePaste : undefined}
            className={[
              sizeClasses[size],
              'text-center border border-[var(--laurel-border-default)]',
              'rounded-[var(--laurel-radius-md)]',
              'bg-[var(--laurel-bg-surface)] text-[var(--laurel-text-heading)]',
              'focus:outline-none focus:ring-2 focus:ring-[var(--laurel-ring-brand-strong)] focus:border-[var(--laurel-border-brand)]',
              'disabled:opacity-50 disabled:cursor-not-allowed',
            ].join(' ')}
          />
        ))}
      </div>
    );
  },
);

PinInput.displayName = 'PinInput';

export { PinInput };
