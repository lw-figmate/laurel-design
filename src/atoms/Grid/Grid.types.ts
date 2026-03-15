export const GRID_COLUMNS = ['1', '2', '3', '4', '5', '6', '12'] as const;
export const GRID_SPACINGS = ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16'] as const;

export type GridColumns = (typeof GRID_COLUMNS)[number];
export type GridSpacing = (typeof GRID_SPACINGS)[number];

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns */
  columns?: GridColumns;
  /** Gap between items using spacing tokens */
  gap?: GridSpacing;
  /** Row gap (overrides gap for rows) */
  rowGap?: GridSpacing;
  /** Column gap (overrides gap for columns) */
  colGap?: GridSpacing;
  /** Align items */
  align?: 'start' | 'center' | 'end' | 'stretch';
}
