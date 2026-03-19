export const DIVIDER_ORIENTATIONS = ['horizontal', 'vertical'] as const;
export const DIVIDER_VARIANTS = ['solid', 'dashed', 'dotted'] as const;

export type DividerOrientation = (typeof DIVIDER_ORIENTATIONS)[number];
export type DividerVariant = (typeof DIVIDER_VARIANTS)[number];

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** Direction of the divider line */
  orientation?: DividerOrientation;
  /** Line style */
  variant?: DividerVariant;
}
