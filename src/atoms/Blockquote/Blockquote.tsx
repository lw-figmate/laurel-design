import { forwardRef } from 'react';
import type { BlockquoteProps } from './Blockquote.types';

const sizeClasses: Record<string, string> = {
  sm: 'pl-[var(--laurel-space-3)] text-[length:var(--laurel-font-size-sm)]',
  md: 'pl-[var(--laurel-space-4)] text-[length:var(--laurel-font-size-base)]',
  lg: 'pl-[var(--laurel-space-5)] text-[length:var(--laurel-font-size-xl)]',
};

const accentClasses: Record<string, string> = {
  default: 'border-[var(--laurel-ring-brand)]',
  neutral: 'border-[var(--laurel-ring-neutral)]',
  primary: 'border-[var(--laurel-border-brand)]',
};

const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ cite, size = 'md', accent = 'default', className = '', children, ...rest }, ref) => (
    <blockquote
      ref={ref}
      cite={cite}
      className={[
        'border-l-4 py-[var(--laurel-space-2)]',
        'italic text-[var(--laurel-text-tertiary)]',
        'font-[family-name:var(--laurel-font-sans)]',
        sizeClasses[size],
        accentClasses[accent],
        className,
      ].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </blockquote>
  ),
);

Blockquote.displayName = 'Blockquote';

export { Blockquote };
