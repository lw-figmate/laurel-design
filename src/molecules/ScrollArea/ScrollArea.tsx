import { forwardRef } from 'react';
import type { ScrollAreaProps } from './ScrollArea.types';

const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ maxHeight, hideScrollbar = false, className = '', children, style, ...rest }, ref) => (
    <div
      ref={ref}
      className={[
        'overflow-auto',
        hideScrollbar
          ? '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
          : [
              '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2',
              '[&::-webkit-scrollbar-track]:bg-transparent',
              '[&::-webkit-scrollbar-thumb]:bg-[var(--laurel-bg-control)] [&::-webkit-scrollbar-thumb]:rounded-full',
              '[&::-webkit-scrollbar-thumb]:hover:bg-[var(--laurel-bg-control-hover)]',
            ].join(' '),
        className,
      ].filter(Boolean).join(' ')}
      style={{
        maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  ),
);

ScrollArea.displayName = 'ScrollArea';

export { ScrollArea };
