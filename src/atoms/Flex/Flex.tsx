import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { FlexProps } from './Flex.types';

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

const directionClasses: Record<string, string> = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  column: 'flex-col',
  'column-reverse': 'flex-col-reverse',
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

const flexClasses: Record<string, string> = {
  '1': 'flex-1',
  auto: 'flex-auto',
  none: 'flex-none',
};

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ align, justify, direction = 'row', wrap, gap, flex, className = '', children, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex',
        directionClasses[direction],
        align && alignClasses[align],
        justify && justifyClasses[justify],
        gap && gapClasses[gap],
        wrap === true && 'flex-wrap',
        wrap === 'reverse' && 'flex-wrap-reverse',
        flex && flexClasses[flex],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  ),
);

Flex.displayName = 'Flex';

export { Flex };
