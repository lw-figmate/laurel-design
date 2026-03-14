export const SWITCH_SIZES = ['sm', 'md', 'lg'] as const;

export type SwitchSize = (typeof SWITCH_SIZES)[number];

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'role'> {
  /** Whether the switch is on */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Called when the switch is toggled */
  onCheckedChange?: (checked: boolean) => void;
  /** Visual size of the switch */
  switchSize?: SwitchSize;
  /** Accessible label */
  'aria-label'?: string;
}
