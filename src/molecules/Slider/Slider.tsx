import { forwardRef, useState, useCallback, useRef } from 'react';
import { Text } from '../../atoms/Text';
import type { SliderProps } from './Slider.types';

const sizeClasses: Record<string, { track: string; thumb: string }> = {
  sm: { track: 'h-1', thumb: 'h-3.5 w-3.5' },
  md: { track: 'h-2', thumb: 'h-4.5 w-4.5' },
  lg: { track: 'h-3', thumb: 'h-5.5 w-5.5' },
};

const Slider = forwardRef<HTMLDivElement, SliderProps>(
  ({ value: controlledValue, defaultValue = 0, min = 0, max = 100, step = 1, onValueChange, label, showValue = false, disabled = false, size = 'md', className = '', ...rest }, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;
    const inputRef = useRef<HTMLInputElement>(null);
    const styles = sizeClasses[size];

    const pct = ((currentValue - min) / (max - min)) * 100;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = Number(e.target.value);
        if (!isControlled) setInternalValue(v);
        onValueChange?.(v);
      },
      [isControlled, onValueChange],
    );

    return (
      <div ref={ref} className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')} {...rest}>
        {(label || showValue) && (
          <div className="flex items-center justify-between mb-[var(--laurel-space-2)]">
            {label && <Text as="label" size="sm" weight="medium">{label}</Text>}
            {showValue && <Text as="span" size="sm" className="text-[var(--laurel-text-muted)]">{currentValue}</Text>}
          </div>
        )}

        <div className="relative flex items-center">
          {/* Track background */}
          <div className={['absolute w-full rounded-full bg-[var(--laurel-bg-accent)]', styles.track].join(' ')} />
          {/* Fill */}
          <div
            className={['absolute rounded-full bg-[var(--laurel-bg-brand)]', styles.track].join(' ')}
            style={{ width: `${pct}%` }}
          />
          {/* Native range input */}
          <input
            ref={inputRef}
            type="range"
            min={min}
            max={max}
            step={step}
            value={currentValue}
            onChange={handleChange}
            disabled={disabled}
            aria-label={label}
            className={[
              'relative z-10 w-full appearance-none bg-transparent cursor-pointer',
              'disabled:cursor-not-allowed disabled:opacity-50',
              '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--laurel-bg-surface)] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--laurel-border-brand)] [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:cursor-pointer',
              `[&::-webkit-slider-thumb]:${styles.thumb}`,
              '[&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[var(--laurel-bg-surface)] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[var(--laurel-border-brand)] [&::-moz-range-thumb]:shadow-sm [&::-moz-range-thumb]:cursor-pointer',
            ].join(' ')}
          />
        </div>
      </div>
    );
  },
);

Slider.displayName = 'Slider';

export { Slider };
