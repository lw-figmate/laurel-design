export const DIVIDER_ORIENTATIONS = ['horizontal', 'vertical'] as const;

export type DividerOrientation = (typeof DIVIDER_ORIENTATIONS)[number];

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** Direction of the divider line */
  orientation?: DividerOrientation;
}
