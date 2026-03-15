export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Align items on the cross axis */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  /** Justify items on the main axis */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  /** Flex direction */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  /** Whether to wrap */
  wrap?: boolean | 'reverse';
  /** Gap between children using spacing tokens */
  gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16';
  /** Flex grow/shrink/basis shorthand on the container itself */
  flex?: '1' | 'auto' | 'none';
}
