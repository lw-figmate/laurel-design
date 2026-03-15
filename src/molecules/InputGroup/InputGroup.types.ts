export interface InputGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'prefix'> {
  /** Content rendered before the input */
  prefix?: React.ReactNode;
  /** Content rendered after the input */
  suffix?: React.ReactNode;
}
