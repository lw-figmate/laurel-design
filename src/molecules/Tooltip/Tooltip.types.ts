export const TOOLTIP_PLACEMENTS = ['top', 'bottom', 'left', 'right'] as const;

export type TooltipPlacement = (typeof TOOLTIP_PLACEMENTS)[number];

export interface TooltipProps {
  /** Tooltip content */
  content: React.ReactNode;
  /** The trigger element */
  children: React.ReactElement;
  /** Preferred placement */
  placement?: TooltipPlacement;
  /** Delay in ms before showing (default: 200) */
  delay?: number;
}
