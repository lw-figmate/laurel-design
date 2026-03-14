import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface SheetProps extends ComponentPropsWithoutRef<'div'> {
  /** Whether the sheet is open */
  open: boolean;
  /** Called when the sheet should close */
  onClose: () => void;
  /** Title shown in the header */
  title?: string;
  /** Sheet content */
  children: ReactNode;
}
