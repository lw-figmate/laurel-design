export const TEXT_ELEMENTS = ['p', 'span', 'label', 'strong', 'em', 'small'] as const;
export const TEXT_SIZES = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'] as const;
export const TEXT_WEIGHTS = ['normal', 'medium', 'semibold', 'bold'] as const;

export type TextElement = (typeof TEXT_ELEMENTS)[number];
export type TextSize = (typeof TEXT_SIZES)[number];
export type TextWeight = (typeof TEXT_WEIGHTS)[number];

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextElement;
  size?: TextSize;
  weight?: TextWeight;
  truncate?: boolean;
}
