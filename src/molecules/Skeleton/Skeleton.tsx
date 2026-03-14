import { forwardRef } from 'react';
import type { SkeletonProps } from './Skeleton.types';

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant = 'rect', width, height, lines = 3, className = '', style, ...rest }, ref) => {
    const baseClasses = 'animate-pulse bg-[var(--laurel-bg-accent)]';

    if (variant === 'circle') {
      const size = width ?? height ?? '2.5rem';
      return (
        <div
          ref={ref}
          className={[baseClasses, 'rounded-full', className].filter(Boolean).join(' ')}
          style={{ width: size, height: size, ...style }}
          aria-hidden="true"
          {...rest}
        />
      );
    }

    if (variant === 'text') {
      return (
        <div ref={ref} className={['space-y-2', className].filter(Boolean).join(' ')} aria-hidden="true" {...rest}>
          {Array.from({ length: lines }, (_, i) => (
            <div
              key={i}
              className={[baseClasses, 'rounded-[var(--laurel-radius-sm)]'].join(' ')}
              style={{
                height: height ?? '0.75rem',
                width: i === lines - 1 ? '75%' : '100%',
                ...style,
              }}
            />
          ))}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={[baseClasses, 'rounded-[var(--laurel-radius-md)]', className].filter(Boolean).join(' ')}
        style={{ width: width ?? '100%', height: height ?? '1rem', ...style }}
        aria-hidden="true"
        {...rest}
      />
    );
  },
);

Skeleton.displayName = 'Skeleton';

export { Skeleton };
