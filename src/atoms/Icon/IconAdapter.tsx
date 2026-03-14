import { forwardRef } from 'react';
import type { IconAdapterProps } from './IconAdapter.types';

const sizeMap: Record<string, string> = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
};

/**
 * Adapter that wraps external icon library components (Lucide, Heroicons, etc.)
 * to use the design system's sizing and accessibility conventions.
 *
 * @example
 * import { Rocket } from 'lucide-react';
 * <IconAdapter icon={Rocket} size="lg" label="Launch" />
 */
const IconAdapter = forwardRef<SVGSVGElement, IconAdapterProps>(
  ({ icon: ExternalIcon, size = 'md', label, className = '', ...rest }, ref) => (
    <ExternalIcon
      ref={ref}
      className={[sizeMap[size], 'shrink-0', className].filter(Boolean).join(' ')}
      aria-hidden={label ? undefined : true}
      aria-label={label ?? undefined}
      role={label ? 'img' : undefined}
      {...rest}
    />
  ),
);

IconAdapter.displayName = 'IconAdapter';

export { IconAdapter };
