export const STACK_DIRECTIONS = ['column', 'row'] as const;
export const STACK_ALIGNS = ['start', 'center', 'end', 'stretch', 'baseline'] as const;
export const STACK_JUSTIFIES = ['start', 'center', 'end', 'between', 'around', 'evenly'] as const;
export const STACK_SPACINGS = ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16'] as const;

export type StackDirection = (typeof STACK_DIRECTIONS)[number];
export type StackAlign = (typeof STACK_ALIGNS)[number];
export type StackJustify = (typeof STACK_JUSTIFIES)[number];
export type StackSpacing = (typeof STACK_SPACINGS)[number];

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Stack direction */
  direction?: StackDirection;
  /** Align items on the cross axis */
  align?: StackAlign;
  /** Justify items on the main axis */
  justify?: StackJustify;
  /** Gap between children using spacing tokens */
  gap?: StackSpacing;
  /** Whether children should wrap */
  wrap?: boolean;
}
