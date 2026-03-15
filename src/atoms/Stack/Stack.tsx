import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { StackProps } from './Stack.types';

const alignClasses: Record<string, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const justifyClasses: Record<string, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const gapClasses: Record<string, string> = {
  '0': 'gap-[var(--laurel-space-0)]',
  '1': 'gap-[var(--laurel-space-1)]',
  '2': 'gap-[var(--laurel-space-2)]',
  '3': 'gap-[var(--laurel-space-3)]',
  '4': 'gap-[var(--laurel-space-4)]',
  '5': 'gap-[var(--laurel-space-5)]',
  '6': 'gap-[var(--laurel-space-6)]',
  '8': 'gap-[var(--laurel-space-8)]',
  '10': 'gap-[var(--laurel-space-10)]',
  '12': 'gap-[var(--laurel-space-12)]',
  '16': 'gap-[var(--laurel-space-16)]',
};

const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ direction = 'column', align, justify, gap = '4', wrap, className = '', children, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex',
        direction === 'row' ? 'flex-row' : 'flex-col',
        align && alignClasses[align],
        justify && justifyClasses[justify],
        gapClasses[gap],
        wrap && 'flex-wrap',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  ),
);

Stack.displayName = 'Stack';

export { Stack };
