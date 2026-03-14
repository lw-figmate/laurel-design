import { forwardRef } from 'react';
import type { TextareaProps } from './Textarea.types';

const sizeClasses: Record<string, string> = {
  sm: 'px-[var(--laurel-space-2)] py-[var(--laurel-space-1)] text-[length:var(--laurel-font-size-sm)]',
  md: 'px-[var(--laurel-space-3)] py-[var(--laurel-space-2)] text-[length:var(--laurel-font-size-base)]',
  lg: 'px-[var(--laurel-space-4)] py-[var(--laurel-space-3)] text-[length:var(--laurel-font-size-lg)]',
};

const resizeClasses: Record<string, string> = {
  none: 'resize-none',
  vertical: 'resize-y',
  horizontal: 'resize-x',
  both: 'resize',
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ textareaSize = 'md', error = false, disabled, resize = 'vertical', className = '', ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        disabled={disabled}
        className={[
          'w-full rounded-[var(--laurel-radius-md)] border bg-[var(--laurel-bg-surface)]',
          'font-[family-name:var(--laurel-font-sans)] text-[var(--laurel-text-primary)]',
          'placeholder:text-[var(--laurel-text-placeholder)]',
          'transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-offset-1',
          'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--laurel-bg-subtle)]',
          error
            ? 'border-[var(--laurel-border-error)] focus:ring-[var(--laurel-ring-error)]'
            : 'border-[var(--laurel-border-default)] focus:ring-[var(--laurel-ring-brand)]',
          sizeClasses[textareaSize],
          resizeClasses[resize],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        aria-invalid={error || undefined}
        {...rest}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea };
