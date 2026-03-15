export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Render as a different element */
  as?: 'span' | 'div';
}
