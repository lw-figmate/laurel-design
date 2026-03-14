import type { ReactNode } from 'react';

export interface ConfirmDialogProps {
  /** Whether the dialog is open */
  open: boolean;
  /** Called when the dialog should close */
  onClose: () => void;
  /** Called when confirmed */
  onConfirm: () => void;
  /** Dialog title */
  title: string;
  /** Dialog message/body */
  children: ReactNode;
  /** Confirm button label (default: 'Confirm') */
  confirmLabel?: string;
  /** Cancel button label (default: 'Cancel') */
  cancelLabel?: string;
  /** Variant for the confirm button */
  variant?: 'primary' | 'danger';
  /** Loading state for confirm button */
  loading?: boolean;
}
