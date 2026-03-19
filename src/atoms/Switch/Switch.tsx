import { forwardRef, useState, useCallback } from 'react';
import type { SwitchProps } from './Switch.types';

const trackSizes: Record<string, string> = {
  sm: 'h-4 w-7',
  md: 'h-5 w-9',
  lg: 'h-6 w-11',
};

const thumbSizes: Record<string, string> = {
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

const translateSizes: Record<string, string> = {
  sm: 'translate-x-3',
  md: 'translate-x-4',
  lg: 'translate-x-5',
};

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      onCheckedChange,
      switchSize = 'md',
      disabled,
      error = false,
      className = '',
      ...rest
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = controlledChecked !== undefined;
    const isChecked = isControlled ? controlledChecked : internalChecked;

    const handleClick = useCallback(() => {
      if (disabled) return;
      const next = !isChecked;
      if (!isControlled) {
        setInternalChecked(next);
      }
      onCheckedChange?.(next);
    }, [disabled, isChecked, isControlled, onCheckedChange]);

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        onClick={handleClick}
        className={[
          'relative inline-flex shrink-0 items-center rounded-[var(--laurel-radius-full)] border-2 border-transparent',
          'transition-colors cursor-pointer',
          'focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[var(--laurel-ring-brand)]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          error && !isChecked
            ? 'bg-[var(--laurel-text-error)]'
            : error && isChecked
              ? 'bg-[var(--laurel-bg-brand)] border-[var(--laurel-text-error)]'
              : isChecked
                ? 'bg-[var(--laurel-bg-brand)]'
                : 'bg-[var(--laurel-bg-control)]',
          trackSizes[switchSize],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        <span
          aria-hidden="true"
          className={[
            'pointer-events-none inline-block rounded-[var(--laurel-radius-full)] bg-[var(--laurel-bg-surface)] shadow-[var(--laurel-shadow-sm)]',
            'transition-transform',
            thumbSizes[switchSize],
            isChecked ? translateSizes[switchSize] : 'translate-x-0',
          ].join(' ')}
        />
      </button>
    );
  },
);

Switch.displayName = 'Switch';

export { Switch };
