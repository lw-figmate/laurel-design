import { forwardRef, createContext, useContext, useState, useCallback } from 'react';
import { Text } from '../../atoms/Text';
import type { AccordionProps, AccordionItemProps } from './Accordion.types';

interface AccordionContextValue {
  openItems: string[];
  toggle: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error('AccordionItem must be used within <Accordion>');
  return ctx;
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ multiple = false, value: controlledValue, defaultValue = [], onValueChange, children, className = '', ...rest }, ref) => {
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
    const isControlled = controlledValue !== undefined;
    const openItems = isControlled ? controlledValue : internalValue;

    const toggle = useCallback(
      (itemValue: string) => {
        const next = openItems.includes(itemValue)
          ? openItems.filter((v) => v !== itemValue)
          : multiple
            ? [...openItems, itemValue]
            : [itemValue];
        if (!isControlled) setInternalValue(next);
        onValueChange?.(next);
      },
      [openItems, multiple, isControlled, onValueChange],
    );

    return (
      <AccordionContext.Provider value={{ openItems, toggle }}>
        <div
          ref={ref}
          className={['divide-y divide-[var(--laurel-border-subtle)] border-y border-[var(--laurel-border-subtle)] font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')}
          {...rest}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  },
);

Accordion.displayName = 'Accordion';

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, title, disabled = false, children, className = '', ...rest }, ref) => {
    const { openItems, toggle } = useAccordionContext();
    const isOpen = openItems.includes(value);

    return (
      <div ref={ref} className={className} {...rest}>
        <button
          type="button"
          aria-expanded={isOpen}
          disabled={disabled}
          onClick={() => toggle(value)}
          className={[
            'flex w-full items-center justify-between py-[var(--laurel-space-4)] px-[var(--laurel-space-2)] text-left cursor-pointer',
            'transition-colors hover:bg-[var(--laurel-bg-muted)]',
            'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--laurel-ring-brand)]',
            'disabled:cursor-not-allowed disabled:opacity-50',
          ].join(' ')}
        >
          <Text as="span" size="sm" weight="medium">
            {title}
          </Text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={['h-5 w-5 shrink-0 text-[var(--laurel-text-muted)] transition-transform duration-200', isOpen && 'rotate-180'].filter(Boolean).join(' ')}
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
        {isOpen && (
          <div className="pb-[var(--laurel-space-4)] px-[var(--laurel-space-2)]">
            {children}
          </div>
        )}
      </div>
    );
  },
);

AccordionItem.displayName = 'AccordionItem';

export { Accordion, AccordionItem };
