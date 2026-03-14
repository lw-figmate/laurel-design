import { forwardRef, useState } from 'react';
import type { RatingProps } from './Rating.types';

const sizeClasses: Record<string, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-7 w-7',
};

const Rating = forwardRef<HTMLDivElement, RatingProps>(
  ({ value: valueProp, defaultValue = 0, max = 5, onValueChange, readonly = false, size = 'md', className = '', ...rest }, ref) => {
    const [internal, setInternal] = useState(defaultValue);
    const [hover, setHover] = useState(0);
    const value = valueProp ?? internal;

    const handleClick = (star: number) => {
      if (readonly) return;
      const next = star === value ? 0 : star;
      if (valueProp === undefined) setInternal(next);
      onValueChange?.(next);
    };

    return (
      <div
        ref={ref}
        role="radiogroup"
        aria-label="Rating"
        className={['inline-flex gap-[var(--laurel-space-0-5)]', className].filter(Boolean).join(' ')}
        onMouseLeave={() => !readonly && setHover(0)}
        {...rest}
      >
        {Array.from({ length: max }, (_, i) => {
          const star = i + 1;
          const filled = star <= (hover || value);
          return (
            <button
              key={star}
              type="button"
              role="radio"
              aria-checked={star <= value}
              aria-label={`${star} star${star > 1 ? 's' : ''}`}
              disabled={readonly}
              onClick={() => handleClick(star)}
              onMouseEnter={() => !readonly && setHover(star)}
              className={[
                'inline-flex items-center justify-center transition-colors',
                readonly ? 'cursor-default' : 'cursor-pointer',
              ].join(' ')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={filled ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth={filled ? 0 : 1.5}
                className={[
                  sizeClasses[size],
                  filled ? 'text-[var(--laurel-icon-warning)]' : 'text-[var(--laurel-text-disabled)]',
                ].join(' ')}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </button>
          );
        })}
      </div>
    );
  },
);

Rating.displayName = 'Rating';

export { Rating };
