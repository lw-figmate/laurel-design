import { forwardRef, createContext, useContext, useState, useCallback, useId } from 'react';
import type { TabsProps, TabListProps, TabProps, TabPanelProps } from './Tabs.types';

interface TabsContextValue {
  activeValue: string;
  setActiveValue: (value: string) => void;
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tabs compound components must be used within <Tabs>');
  return ctx;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ defaultValue = '', value: controlledValue, onValueChange, children, className = '', ...rest }, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const isControlled = controlledValue !== undefined;
    const activeValue = isControlled ? controlledValue : internalValue;
    const baseId = useId();

    const setActiveValue = useCallback(
      (v: string) => {
        if (!isControlled) setInternalValue(v);
        onValueChange?.(v);
      },
      [isControlled, onValueChange],
    );

    return (
      <TabsContext.Provider value={{ activeValue, setActiveValue, baseId }}>
        <div ref={ref} className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')} {...rest}>
          {children}
        </div>
      </TabsContext.Provider>
    );
  },
);

Tabs.displayName = 'Tabs';

const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ children, className = '', ...rest }, ref) => {
    return (
      <div
        ref={ref}
        role="tablist"
        className={[
          'flex border-b border-[var(--laurel-border-subtle)]',
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

TabList.displayName = 'TabList';

const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ value, disabled, children, className = '', ...rest }, ref) => {
    const { activeValue, setActiveValue, baseId } = useTabsContext();
    const isActive = activeValue === value;

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        id={`${baseId}-tab-${value}`}
        aria-selected={isActive}
        aria-controls={`${baseId}-panel-${value}`}
        tabIndex={isActive ? 0 : -1}
        disabled={disabled}
        onClick={() => setActiveValue(value)}
        className={[
          'px-[var(--laurel-space-4)] py-[var(--laurel-space-2)] text-[length:var(--laurel-font-size-sm)] font-[var(--laurel-font-weight-medium)]',
          'border-b-2 -mb-px transition-colors cursor-pointer',
          'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--laurel-ring-brand)]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          isActive
            ? 'border-[var(--laurel-border-brand)] text-[var(--laurel-text-brand)]'
            : 'border-transparent text-[var(--laurel-text-muted)] hover:text-[var(--laurel-text-secondary)] hover:border-[var(--laurel-border-default)]',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Tab.displayName = 'Tab';

const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ value, children, className = '', ...rest }, ref) => {
    const { activeValue, baseId } = useTabsContext();

    if (activeValue !== value) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={`${baseId}-panel-${value}`}
        aria-labelledby={`${baseId}-tab-${value}`}
        tabIndex={0}
        className={['pt-[var(--laurel-space-4)]', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

TabPanel.displayName = 'TabPanel';

export { Tabs, TabList, Tab, TabPanel };
