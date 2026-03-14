import { forwardRef, useState, useEffect, useCallback } from 'react';
import { CommandPalette } from '../../molecules/CommandPalette';
import type { CommandBarProps } from './CommandBar.types';

const CommandBar = forwardRef<HTMLDivElement, CommandBarProps>(
  ({ commands, onSelect, shortcutKey = 'k', placeholder, className = '', ...rest }, ref) => {
    const [open, setOpen] = useState(false);

    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === shortcutKey) {
          e.preventDefault();
          setOpen((prev) => !prev);
        }
      },
      [shortcutKey],
    );

    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    return (
      <div ref={ref} className={className} {...rest}>
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          commands={commands}
          onSelect={(cmd) => {
            onSelect(cmd);
            setOpen(false);
          }}
          placeholder={placeholder}
        />
      </div>
    );
  },
);

CommandBar.displayName = 'CommandBar';

export { CommandBar };
