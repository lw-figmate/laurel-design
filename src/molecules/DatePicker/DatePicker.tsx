import { forwardRef, useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import type { DatePickerProps } from './DatePicker.types';

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function formatDate(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ value, onValueChange, placeholder = 'Select date', disabled = false, min, max, className = '', ...rest }, ref) => {
    const [open, setOpen] = useState(false);
    const [viewDate, setViewDate] = useState(() => value ?? new Date());
    const containerRef = useRef<HTMLDivElement>(null);

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();

    const isDisabled = useCallback((d: Date) => {
      if (min && d < new Date(min.getFullYear(), min.getMonth(), min.getDate())) return true;
      if (max && d > new Date(max.getFullYear(), max.getMonth(), max.getDate())) return true;
      return false;
    }, [min, max]);

    const calendarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!open) return;
      const handleClick = (e: MouseEvent) => {
        if (containerRef.current && containerRef.current.contains(e.target as Node)) return;
        if (calendarRef.current && calendarRef.current.contains(e.target as Node)) return;
        setOpen(false);
      };
      document.addEventListener('mousedown', handleClick);
      return () => document.removeEventListener('mousedown', handleClick);
    }, [open]);

    useEffect(() => {
      if (!open) return;
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false);
      };
      document.addEventListener('keydown', handleKey);
      return () => document.removeEventListener('keydown', handleKey);
    }, [open]);

    const select = (day: number) => {
      const d = new Date(year, month, day);
      if (isDisabled(d)) return;
      onValueChange?.(d);
      setOpen(false);
    };

    const calendar = open && createPortal(
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20" role="presentation">
        <div
          ref={calendarRef}
          className={[
            'bg-[var(--laurel-bg-surface)] rounded-[var(--laurel-radius-lg)] border border-[var(--laurel-border-subtle)]',
            'shadow-lg p-[var(--laurel-space-4)]',
            'font-[family-name:var(--laurel-font-sans)]',
          ].join(' ')}
          role="dialog"
          aria-label="Date picker"
        >
          <div className="flex items-center justify-between mb-[var(--laurel-space-2)]">
            <button
              type="button"
              aria-label="Previous month"
              onClick={() => setViewDate(new Date(year, month - 1, 1))}
              className="p-1 rounded hover:bg-[var(--laurel-bg-subtle)] cursor-pointer"
            >
              ‹
            </button>
            <span className="text-[length:var(--laurel-font-size-sm)] font-[var(--laurel-font-weight-semibold)] text-[var(--laurel-text-heading)]">
              {viewDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </span>
            <button
              type="button"
              aria-label="Next month"
              onClick={() => setViewDate(new Date(year, month + 1, 1))}
              className="p-1 rounded hover:bg-[var(--laurel-bg-subtle)] cursor-pointer"
            >
              ›
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {DAYS.map((d) => (
              <div key={d} className="text-[length:var(--laurel-font-size-xs)] font-[var(--laurel-font-weight-medium)] text-[var(--laurel-text-placeholder)] py-1">
                {d}
              </div>
            ))}
            {Array.from({ length: firstDay }, (_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const day = i + 1;
              const d = new Date(year, month, day);
              const isSelected = value && formatDate(d) === formatDate(value);
              const isToday = formatDate(d) === formatDate(new Date());
              const dayDisabled = isDisabled(d);
              return (
                <button
                  key={day}
                  type="button"
                  disabled={dayDisabled}
                  onClick={() => select(day)}
                  className={[
                    'h-8 w-8 rounded-[var(--laurel-radius-md)] text-[length:var(--laurel-font-size-sm)]',
                    'transition-colors cursor-pointer',
                    isSelected
                      ? 'bg-[var(--laurel-bg-brand)] text-[var(--laurel-text-on-brand)]'
                      : isToday
                        ? 'bg-[var(--laurel-bg-brand-subtle)] text-[var(--laurel-text-brand)]'
                        : 'hover:bg-[var(--laurel-bg-subtle)] text-[var(--laurel-text-secondary)]',
                    dayDisabled ? 'opacity-30 cursor-not-allowed' : '',
                  ].join(' ')}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      </div>,
      document.body,
    );

    return (
      <div ref={(node) => {
        (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }} className={['relative inline-block', className].filter(Boolean).join(' ')} {...rest}>
        <button
          type="button"
          disabled={disabled}
          onClick={() => setOpen(!open)}
          className={[
            'inline-flex items-center gap-[var(--laurel-space-2)]',
            'h-10 px-[var(--laurel-space-3)]',
            'border border-[var(--laurel-border-default)] rounded-[var(--laurel-radius-md)]',
            'bg-[var(--laurel-bg-surface)] text-[length:var(--laurel-font-size-sm)]',
            'font-[family-name:var(--laurel-font-sans)]',
            'hover:border-[var(--laurel-border-strong)]',
            'focus:outline-none focus:ring-2 focus:ring-[var(--laurel-ring-brand-strong)]',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'cursor-pointer',
            value ? 'text-[var(--laurel-text-heading)]' : 'text-[var(--laurel-text-placeholder)]',
          ].join(' ')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd" />
          </svg>
          {value ? formatDate(value) : placeholder}
        </button>
        {calendar}
      </div>
    );
  },
);

DatePicker.displayName = 'DatePicker';

export { DatePicker };
