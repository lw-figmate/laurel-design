import { forwardRef } from 'react';
import type { ColorSwatchProps } from './ColorSwatch.types';

const sizeClasses: Record<string, string> = {
  sm: 'h-5 w-5',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
};

const shapeClasses: Record<string, string> = {
  circle: 'rounded-[var(--laurel-radius-full)]',
  square: 'rounded-[var(--laurel-radius-md)]',
};

const ColorSwatch = forwardRef<HTMLButtonElement, ColorSwatchProps>(
  ({ color, size = 'md', selected = false, shape = 'circle', disabled = false, className = '', style, ...rest }, ref) => (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      aria-label={color}
      className={[
        'border-2 transition-shadow cursor-pointer',
        shapeClasses[shape],
        sizeClasses[size],
        disabled
          ? 'opacity-50 cursor-not-allowed'
          : selected
            ? 'border-[var(--laurel-border-brand)] ring-2 ring-[var(--laurel-ring-brand-subtle)]'
            : 'border-[var(--laurel-border-subtle)] hover:border-[var(--laurel-border-strong)]',
        className,
      ].filter(Boolean).join(' ')}
      style={{ backgroundColor: color, ...style }}
      {...rest}
    />
  ),
);

ColorSwatch.displayName = 'ColorSwatch';

export { ColorSwatch };
