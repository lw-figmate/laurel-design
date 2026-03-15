import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { GridProps } from './Grid.types';

const colsClasses: Record<string, string> = {
  '1': 'grid-cols-1',
  '2': 'grid-cols-2',
  '3': 'grid-cols-3',
  '4': 'grid-cols-4',
  '5': 'grid-cols-5',
  '6': 'grid-cols-6',
  '12': 'grid-cols-12',
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

const rowGapClasses: Record<string, string> = {
  '0': 'row-gap-[var(--laurel-space-0)]',
  '1': 'row-gap-[var(--laurel-space-1)]',
  '2': 'row-gap-[var(--laurel-space-2)]',
  '3': 'row-gap-[var(--laurel-space-3)]',
  '4': 'row-gap-[var(--laurel-space-4)]',
  '5': 'row-gap-[var(--laurel-space-5)]',
  '6': 'row-gap-[var(--laurel-space-6)]',
  '8': 'row-gap-[var(--laurel-space-8)]',
  '10': 'row-gap-[var(--laurel-space-10)]',
  '12': 'row-gap-[var(--laurel-space-12)]',
  '16': 'row-gap-[var(--laurel-space-16)]',
};

const colGapClasses: Record<string, string> = {
  '0': 'col-gap-[var(--laurel-space-0)]',
  '1': 'col-gap-[var(--laurel-space-1)]',
  '2': 'col-gap-[var(--laurel-space-2)]',
  '3': 'col-gap-[var(--laurel-space-3)]',
  '4': 'col-gap-[var(--laurel-space-4)]',
  '5': 'col-gap-[var(--laurel-space-5)]',
  '6': 'col-gap-[var(--laurel-space-6)]',
  '8': 'col-gap-[var(--laurel-space-8)]',
  '10': 'col-gap-[var(--laurel-space-10)]',
  '12': 'col-gap-[var(--laurel-space-12)]',
  '16': 'col-gap-[var(--laurel-space-16)]',
};

const alignClasses: Record<string, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ columns = '1', gap = '4', rowGap, colGap, align, className = '', children, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(
        'grid',
        colsClasses[columns],
        !rowGap && !colGap && gapClasses[gap],
        rowGap && rowGapClasses[rowGap],
        colGap && colGapClasses[colGap],
        align && alignClasses[align],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  ),
);

Grid.displayName = 'Grid';

export { Grid };
