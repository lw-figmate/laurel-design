import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface CommandPaletteProps extends ComponentPropsWithoutRef<'div'> {
  /** Whether the palette is open */
  open: boolean;
  /** Called when the palette should close */
  onClose: () => void;
  /** Available commands */
  commands: CommandItem[];
  /** Called when a command is selected */
  onSelect: (command: CommandItem) => void;
  /** Search input placeholder */
  placeholder?: string;
}

export interface CommandItem {
  /** Unique identifier */
  id: string;
  /** Display label */
  label: string;
  /** Optional description */
  description?: string;
  /** Icon element */
  icon?: ReactNode;
  /** Group name for grouping */
  group?: string;
  /** Keyboard shortcut label */
  shortcut?: string;
}
