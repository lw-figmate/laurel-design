export const TOAST_VARIANTS = ['info', 'success', 'warning', 'error'] as const;

export type ToastVariant = (typeof TOAST_VARIANTS)[number];

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color variant */
  variant?: ToastVariant;
  /** Toast message */
  message: string;
  /** Called when the dismiss button is clicked */
  onDismiss?: () => void;
  /** Optional action button */
  action?: { label: string; onClick: () => void };
}
