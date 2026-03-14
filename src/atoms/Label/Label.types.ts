export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Mark the associated field as required (shows an asterisk) */
  required?: boolean;
  /** Visually dim the label when the field is disabled */
  disabled?: boolean;
}
