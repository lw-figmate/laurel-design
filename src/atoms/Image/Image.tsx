import { forwardRef, useState, useCallback } from 'react';
import type { ImageProps } from './Image.types';

const fitClasses: Record<string, string> = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
  none: 'object-none',
};

const radiusClasses: Record<string, string> = {
  none: 'rounded-[var(--laurel-radius-none)]',
  sm: 'rounded-[var(--laurel-radius-sm)]',
  md: 'rounded-[var(--laurel-radius-md)]',
  lg: 'rounded-[var(--laurel-radius-lg)]',
  xl: 'rounded-[var(--laurel-radius-xl)]',
  full: 'rounded-[var(--laurel-radius-full)]',
};

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ fit = 'cover', radius = 'none', fallback, aspectRatio, className = '', style, onError, ...rest }, ref) => {
    const [hasError, setHasError] = useState(false);

    const handleError = useCallback(
      (e: React.SyntheticEvent<HTMLImageElement>) => {
        setHasError(true);
        onError?.(e);
      },
      [onError],
    );

    if (hasError && fallback) {
      return <>{fallback}</>;
    }

    return (
      <img
        ref={ref}
        className={[
          fitClasses[fit],
          radiusClasses[radius],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        style={{ ...style, ...(aspectRatio ? { aspectRatio } : {}) }}
        onError={handleError}
        {...rest}
      />
    );
  },
);

Image.displayName = 'Image';

export { Image };
