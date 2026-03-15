export const TEXT_ELEMENTS = ['p', 'span', 'label', 'strong', 'em', 'small', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'] as const;
export const TEXT_SIZES = ['xs', 'sm', 'md', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'] as const;
export const TEXT_WEIGHTS = ['normal', 'medium', 'semibold', 'bold'] as const;

export type TextElement = (typeof TEXT_ELEMENTS)[number];
export type TextSize = (typeof TEXT_SIZES)[number];
export type TextWeight = (typeof TEXT_WEIGHTS)[number];

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /** HTML element to render */
  as?: TextElement;
  /** Font size */
  size?: TextSize;
  /** Font weight */
  weight?: TextWeight;
  /** Truncate text with ellipsis */
  truncate?: boolean;
}
