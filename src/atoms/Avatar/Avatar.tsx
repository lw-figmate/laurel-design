import { forwardRef, useState } from 'react';
import type { AvatarProps } from './Avatar.types';

const sizeClasses: Record<string, string> = {
  xs: 'h-6 w-6 text-[length:var(--laurel-font-size-xs)]',
  sm: 'h-8 w-8 text-[length:var(--laurel-font-size-xs)]',
  md: 'h-10 w-10 text-[length:var(--laurel-font-size-sm)]',
  lg: 'h-12 w-12 text-[length:var(--laurel-font-size-base)]',
  xl: 'h-16 w-16 text-[length:var(--laurel-font-size-lg)]',
};

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt, initials, size = 'md', className = '', ...rest }, ref) => {
    const [imgError, setImgError] = useState(false);
    const showImage = src && !imgError;

    return (
      <span
        ref={ref}
        role="img"
        aria-label={alt ?? initials ?? 'avatar'}
        className={[
          'inline-flex items-center justify-center rounded-[var(--laurel-radius-full)] overflow-hidden',
          'bg-[var(--laurel-bg-accent)] text-[var(--laurel-text-tertiary)]',
          'font-[var(--laurel-font-weight-medium)] select-none shrink-0',
          sizeClasses[size],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt ?? ''}
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <span aria-hidden="true">
            {initials?.slice(0, 2).toUpperCase() ?? '?'}
          </span>
        )}
      </span>
    );
  },
);

Avatar.displayName = 'Avatar';

export { Avatar };
