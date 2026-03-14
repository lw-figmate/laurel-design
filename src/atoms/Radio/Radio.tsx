import { forwardRef } from 'react';
import type { RadioProps } from './Radio.types';

const sizeClasses: Record<string, string> = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ radioSize = 'md', disabled, className = '', ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type="radio"
        disabled={disabled}
        className={[
          sizeClasses[radioSize],
          'border-[var(--laurel-border-default)]',
          'text-[var(--laurel-text-brand)]',
          'transition-colors cursor-pointer',
          'focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[var(--laurel-ring-brand)]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      />
    );
  },
);

Radio.displayName = 'Radio';

export { Radio };
