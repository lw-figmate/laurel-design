import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { ContainerProps } from './Container.types';

const sizeClasses: Record<string, string> = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
};

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'xl', center = true, padding = true, className = '', children, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(
        'w-full',
        sizeClasses[size],
        center && 'mx-auto',
        padding && 'px-[var(--laurel-space-4)] sm:px-[var(--laurel-space-6)] lg:px-[var(--laurel-space-8)]',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  ),
);

Container.displayName = 'Container';

export { Container };
