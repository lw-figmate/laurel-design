export const LABEL_SIZES = ['sm', 'md', 'lg'] as const;

export type LabelSize = (typeof LABEL_SIZES)[number];

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Mark the associated field as required (shows an asterisk) */
  required?: boolean;
  /** Visually dim the label when the field is disabled */
  disabled?: boolean;
  /** Size of the label text */
  size?: LabelSize;
}
