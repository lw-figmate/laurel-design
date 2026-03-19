export const RADIO_SIZES = ['sm', 'md', 'lg'] as const;

export type RadioSize = (typeof RADIO_SIZES)[number];

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Visual size of the radio button */
  radioSize?: RadioSize;
  /** Show error styling (red border) */
  error?: boolean;
}
