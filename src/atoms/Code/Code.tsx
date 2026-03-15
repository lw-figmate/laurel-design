import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { CodeProps } from './Code.types';

const sizeClasses: Record<string, string> = {
  sm: 'text-[length:var(--laurel-font-size-xs)]',
  md: 'text-[length:var(--laurel-font-size-sm)]',
  lg: 'text-[length:var(--laurel-font-size-base)]',
};

const Code = forwardRef<HTMLElement, CodeProps>(
  ({ size = 'md', block = false, className = '', children, ...rest }, ref) => {
    const codeElement = (
      <code
        ref={block ? undefined : ref}
        className={cn(
          'font-[family-name:var(--laurel-font-mono)]',
          sizeClasses[size],
          !block && 'rounded-[var(--laurel-radius-sm)] bg-[var(--laurel-bg-subtle)] px-[var(--laurel-space-1-5)] py-[var(--laurel-space-0-5)]',
          !block && className,
        )}
        {...(block ? {} : rest)}
      >
        {children}
      </code>
    );

    if (block) {
      return (
        <pre
          ref={ref as React.Ref<HTMLPreElement>}
          className={cn(
            'overflow-x-auto rounded-[var(--laurel-radius-lg)] bg-[var(--laurel-bg-subtle)] p-[var(--laurel-space-4)]',
            className,
          )}
          {...rest}
        >
          {codeElement}
        </pre>
      );
    }

    return codeElement;
  },
);

Code.displayName = 'Code';

export { Code };
