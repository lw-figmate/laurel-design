export const SPINNER_SIZES = ['sm', 'md', 'lg', 'xl'] as const;

export type SpinnerSize = (typeof SPINNER_SIZES)[number];

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual size of the spinner */
  size?: SpinnerSize;
  /** Accessible label (defaults to "Loading") */
  label?: string;
}
