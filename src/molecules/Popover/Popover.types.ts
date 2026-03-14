export const POPOVER_PLACEMENTS = ['top', 'bottom', 'left', 'right'] as const;

export type PopoverPlacement = (typeof POPOVER_PLACEMENTS)[number];

export interface PopoverProps {
  /** The trigger element */
  trigger: React.ReactElement;
  /** Popover content */
  children: React.ReactNode;
  /** Controlled open state */
  open?: boolean;
  /** Called when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Preferred placement relative to the trigger */
  placement?: PopoverPlacement;
  /** Additional class names for the popover panel */
  className?: string;
}
