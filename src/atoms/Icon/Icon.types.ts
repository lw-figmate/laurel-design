export const ICON_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type IconSize = (typeof ICON_SIZES)[number];

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** The SVG path(s) or child elements to render inside the icon */
  children: React.ReactNode;
  /** Visual size of the icon */
  size?: IconSize;
  /** Accessible label — if omitted the icon is treated as decorative (aria-hidden) */
  label?: string;
}
