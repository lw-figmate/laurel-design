import type { ComponentPropsWithRef } from 'react';
import type { CommandItem } from '../../molecules/CommandPalette/CommandPalette.types';

export interface CommandBarProps extends Omit<ComponentPropsWithRef<'div'>, 'onSelect'> {
  /** Available commands */
  commands: CommandItem[];
  /** Called when a command is selected */
  onSelect: (command: CommandItem) => void;
  /** Keyboard shortcut to open (default: 'k') */
  shortcutKey?: string;
  /** Search placeholder */
  placeholder?: string;
}
