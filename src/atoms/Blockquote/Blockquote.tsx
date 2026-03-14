import { forwardRef } from 'react';
import type { BlockquoteProps } from './Blockquote.types';

const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ cite, className = '', children, ...rest }, ref) => (
    <blockquote
      ref={ref}
      cite={cite}
      className={[
        'border-l-4 border-[var(--laurel-border-brand-accent)]',
        'pl-[var(--laurel-space-4)] py-[var(--laurel-space-2)]',
        'italic text-[var(--laurel-text-tertiary)]',
        'font-[family-name:var(--laurel-font-sans)]',
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
