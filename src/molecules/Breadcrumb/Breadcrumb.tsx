import { forwardRef, Children, isValidElement, cloneElement } from 'react';
import type { BreadcrumbProps, BreadcrumbItemProps } from './Breadcrumb.types';

const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ separator = '/', children, className = '', ...rest }, ref) => {
    const items = Children.toArray(children).filter(isValidElement);

    return (
      <nav ref={ref} aria-label="Breadcrumb" className={className} {...rest}>
        <ol className="flex items-center gap-[var(--laurel-space-1)] font-[family-name:var(--laurel-font-sans)] text-[length:var(--laurel-font-size-sm)]">
          {items.map((child, index) => (
            <li key={index} className="flex items-center gap-[var(--laurel-space-1)]">
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="text-[var(--laurel-text-placeholder)] select-none"
                >
                  {separator}
                </span>
              )}
              {isValidElement<BreadcrumbItemProps>(child) && child.type === BreadcrumbItem
                ? cloneElement(child, {
                    active: index === items.length - 1 ? (child.props.active ?? true) : child.props.active,
                  })
                : child}
            </li>
          ))}
        </ol>
      </nav>
    );
  },
);

Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ href, active, children, className = '' }, ref) => {
    if (active || !href) {
      return (
        <span
          ref={ref as React.Ref<HTMLSpanElement>}
          aria-current={active ? 'page' : undefined}
          className={[
            'text-[var(--laurel-text-primary)] font-[var(--laurel-font-weight-medium)]',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {children}
        </span>
      );
    }

    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={[
          'text-[var(--laurel-text-muted)] hover:text-[var(--laurel-text-secondary)] transition-colors',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {children}
      </a>
    );
  },
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

export { Breadcrumb, BreadcrumbItem };
