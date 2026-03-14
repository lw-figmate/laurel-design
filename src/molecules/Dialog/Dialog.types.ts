export interface DialogProps {
  /** Whether the dialog is open */
  open: boolean;
  /** Called when the dialog should close (overlay click, Escape, or dismiss button) */
  onClose: () => void;
  /** Dialog heading */
  title?: string;
  /** Dialog body content */
  children: React.ReactNode;
  /** Additional class names for the dialog panel */
  className?: string;
}
