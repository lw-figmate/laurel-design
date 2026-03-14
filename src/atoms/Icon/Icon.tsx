import { forwardRef } from 'react';
import type { IconProps } from './Icon.types';

const sizeMap: Record<string, string> = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
};

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 'md', label, children, className = '', ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={[sizeMap[size], 'shrink-0', className].filter(Boolean).join(' ')}
        aria-hidden={label ? undefined : true}
        aria-label={label ?? undefined}
        role={label ? 'img' : undefined}
        {...rest}
      >
        {children}
      </svg>
    );
  },
);

Icon.displayName = 'Icon';

export { Icon };
