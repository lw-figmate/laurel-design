import { forwardRef, useRef, useCallback } from 'react';
import { Input } from '../../atoms/Input';
import { Icon } from '../../atoms/Icon';
import type { SearchFieldProps } from './SearchField.types';

const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  ({ onSearch, onClear, onKeyDown, className = '', ...rest }, ref) => {
    const internalRef = useRef<HTMLInputElement>(null);
    const inputRef = (ref as React.RefObject<HTMLInputElement>) ?? internalRef;

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && onSearch) {
          onSearch(e.currentTarget.value);
        }
        onKeyDown?.(e);
      },
      [onSearch, onKeyDown],
    );

    const handleClear = useCallback(() => {
      if (inputRef.current) {
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          'value',
        )?.set;
        nativeInputValueSetter?.call(inputRef.current, '');
        inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
        inputRef.current.focus();
      }
      onClear?.();
    }, [inputRef, onClear]);

    return (
      <div className={['relative flex items-center', className].filter(Boolean).join(' ')}>
        <span className="pointer-events-none absolute left-[var(--laurel-space-3)] flex items-center">
          <Icon size="sm" className="text-[var(--laurel-text-placeholder)]">
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.45 4.39l3.08 3.08a.75.75 0 1 1-1.06 1.06l-3.08-3.08A7 7 0 0 1 2 9Z"
              clipRule="evenodd"
            />
          </Icon>
        </span>
        <Input
          ref={inputRef}
          type="search"
          role="searchbox"
          className="pl-[var(--laurel-space-10)] pr-[var(--laurel-space-10)]"
          onKeyDown={handleKeyDown}
          {...rest}
        />
        {onClear && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            className="absolute right-[var(--laurel-space-3)] flex items-center text-[var(--laurel-text-placeholder)] hover:text-[var(--laurel-text-tertiary)] transition-colors"
          >
            <Icon size="sm">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </Icon>
          </button>
        )}
      </div>
    );
  },
);

SearchField.displayName = 'SearchField';

export { SearchField };
