import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import { Divider } from '../../atoms/Divider';
import type { FooterProps } from './Footer.types';

const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ columns = [], logo, copyright, bottomContent, className = '', children, ...rest }, ref) => (
    <footer
      ref={ref}
      className={[
        'bg-[var(--laurel-bg-muted)] border-t border-[var(--laurel-border-subtle)]',
        'font-[family-name:var(--laurel-font-sans)]',
        'px-[var(--laurel-space-6)] py-[var(--laurel-space-10)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <div className="max-w-7xl mx-auto">
        {(logo || columns.length > 0) && (
          <div className="flex flex-col md:flex-row gap-[var(--laurel-space-8)] mb-[var(--laurel-space-8)]">
            {logo && <div className="shrink-0">{logo}</div>}

            {columns.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--laurel-space-8)] flex-1">
                {columns.map((col) => (
                  <div key={col.title}>
                    <Text as="strong" size="sm" weight="semibold" className="block mb-[var(--laurel-space-3)]">
                      {col.title}
                    </Text>
                    <ul className="space-y-[var(--laurel-space-2)]">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="text-[length:var(--laurel-font-size-sm)] text-[var(--laurel-text-tertiary)] hover:text-[var(--laurel-text-brand)] transition-colors"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {children}

        {(copyright || bottomContent) && (
          <>
            <Divider className="my-[var(--laurel-space-6)]" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-[var(--laurel-space-4)]">
              {copyright && (
                <Text as="span" size="xs" className="text-[var(--laurel-text-muted)]">
                  {copyright}
                </Text>
              )}
              {bottomContent && <div>{bottomContent}</div>}
            </div>
          </>
        )}
      </div>
    </footer>
  ),
);

Footer.displayName = 'Footer';

export { Footer };
