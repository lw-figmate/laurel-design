import { useState, useRef, useCallback, cloneElement } from 'react';
import type { TooltipProps } from './Tooltip.types';

const placementClasses: Record<string, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-[var(--laurel-space-2)]',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-[var(--laurel-space-2)]',
  left: 'right-full top-1/2 -translate-y-1/2 mr-[var(--laurel-space-2)]',
  right: 'left-full top-1/2 -translate-y-1/2 ml-[var(--laurel-space-2)]',
};

const Tooltip = ({ content, children, placement = 'top', delay = 200 }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const show = useCallback(() => {
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  }, [delay]);

  const hide = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setVisible(false);
  }, []);

  const trigger = cloneElement(children, {
    onMouseEnter: (e: React.MouseEvent) => {
      show();
      children.props.onMouseEnter?.(e);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      hide();
      children.props.onMouseLeave?.(e);
    },
    onFocus: (e: React.FocusEvent) => {
      show();
      children.props.onFocus?.(e);
    },
    onBlur: (e: React.FocusEvent) => {
      hide();
      children.props.onBlur?.(e);
    },
    'aria-describedby': visible ? 'laurel-tooltip' : undefined,
  });

  return (
    <div className="relative inline-block">
      {trigger}
      {visible && (
        <div
          id="laurel-tooltip"
          role="tooltip"
          className={[
            'absolute z-50 whitespace-nowrap',
            'rounded-[var(--laurel-radius-md)] bg-[var(--laurel-bg-elevated)] px-[var(--laurel-space-3)] py-[var(--laurel-space-1-5)]',
            'text-[length:var(--laurel-font-size-xs)] text-[var(--laurel-text-on-brand)]',
            'font-[family-name:var(--laurel-font-sans)] shadow-[var(--laurel-shadow-md)]',
            'pointer-events-none',
            placementClasses[placement],
          ].join(' ')}
        >
          {content}
        </div>
      )}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';

export { Tooltip };
