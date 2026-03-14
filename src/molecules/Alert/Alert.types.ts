export const ALERT_VARIANTS = ['info', 'success', 'warning', 'error'] as const;

export type AlertVariant = (typeof ALERT_VARIANTS)[number];

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color variant */
  variant?: AlertVariant;
  /** Optional title rendered above the children */
  title?: string;
  /** Called when the dismiss button is clicked — renders a dismiss button when provided */
  onDismiss?: () => void;
}
