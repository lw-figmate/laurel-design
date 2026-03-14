import { forwardRef } from 'react';
import type { TextProps } from './Text.types';

const sizeClasses: Record<string, string> = {
  xs: 'text-[length:var(--laurel-font-size-xs)] leading-[var(--laurel-line-height-normal)]',
  sm: 'text-[length:var(--laurel-font-size-sm)] leading-[var(--laurel-line-height-normal)]',
  base: 'text-[length:var(--laurel-font-size-base)] leading-[var(--laurel-line-height-normal)]',
  lg: 'text-[length:var(--laurel-font-size-lg)] leading-[var(--laurel-line-height-normal)]',
  xl: 'text-[length:var(--laurel-font-size-xl)] leading-[var(--laurel-line-height-tight)]',
  '2xl': 'text-[length:var(--laurel-font-size-2xl)] leading-[var(--laurel-line-height-tight)]',
  '3xl': 'text-[length:var(--laurel-font-size-3xl)] leading-[var(--laurel-line-height-tight)]',
  '4xl': 'text-[length:var(--laurel-font-size-4xl)] leading-[var(--laurel-line-height-tight)]',
};

const weightClasses: Record<string, string> = {
  normal: 'font-[var(--laurel-font-weight-normal)]',
  medium: 'font-[var(--laurel-font-weight-medium)]',
  semibold: 'font-[var(--laurel-font-weight-semibold)]',
  bold: 'font-[var(--laurel-font-weight-bold)]',
};

const Text = forwardRef<HTMLElement, TextProps>(
  (
    { as: Component = 'p', size = 'base', weight = 'normal', truncate = false, className = '', children, ...rest },
    ref,
  ) => {
    return (
      <Component
        ref={ref as React.Ref<never>}
        className={[
          'font-[family-name:var(--laurel-font-sans)] text-[var(--laurel-text-primary)]',
          sizeClasses[size],
          weightClasses[weight],
          truncate && 'truncate',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

Text.displayName = 'Text';

export { Text };
