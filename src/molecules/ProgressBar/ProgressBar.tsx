import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import type { ProgressBarProps } from './ProgressBar.types';

const sizeClasses: Record<string, string> = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};

const variantClasses: Record<string, string> = {
  primary: 'bg-[var(--laurel-bg-brand)]',
  success: 'bg-[var(--laurel-bg-success)]',
  warning: 'bg-[var(--laurel-bg-warning)]',
  error: 'bg-[var(--laurel-bg-danger)]',
};

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ value, max = 100, label, showValue = false, size = 'md', variant = 'primary', className = '', ...rest }, ref) => {
    const pct = Math.min(100, Math.max(0, (value / max) * 100));

    return (
      <div ref={ref} className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')} {...rest}>
        {(label || showValue) && (
          <div className="flex items-center justify-between mb-[var(--laurel-space-1)]">
            {label && <Text as="span" size="sm" weight="medium">{label}</Text>}
            {showValue && <Text as="span" size="xs" className="text-[var(--laurel-text-muted)]">{Math.round(pct)}%</Text>}
          </div>
        )}
        <div
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label}
          className={['w-full rounded-full bg-[var(--laurel-bg-accent)] overflow-hidden', sizeClasses[size]].join(' ')}
        >
          <div
            className={['h-full rounded-full transition-[width] duration-300 ease-out', variantClasses[variant]].join(' ')}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    );
  },
);

ProgressBar.displayName = 'ProgressBar';

export { ProgressBar };
