import { forwardRef } from 'react';
import type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps } from './Card.types';

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ noPadding = false, className = '', children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          'rounded-[var(--laurel-radius-xl)] border border-[var(--laurel-border-subtle)]',
          'bg-[var(--laurel-bg-surface)] shadow-[var(--laurel-shadow-sm)]',
          !noPadding && 'p-[var(--laurel-space-6)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          'pb-[var(--laurel-space-4)]',
          className,
        ].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
CardHeader.displayName = 'CardHeader';

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className = '', children, ...rest }, ref) => {
    return (
      <div ref={ref} className={className || undefined} {...rest}>
        {children}
      </div>
    );
  },
);
CardBody.displayName = 'CardBody';

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = '', children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          'pt-[var(--laurel-space-4)] flex items-center gap-[var(--laurel-space-3)]',
          className,
        ].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardBody, CardFooter };
