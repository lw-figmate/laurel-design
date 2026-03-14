import type { IconSize } from '../Icon.types';

export interface NamedIconProps extends Omit<React.SVGAttributes<SVGSVGElement>, 'children'> {
  /** Visual size of the icon */
  size?: IconSize;
  /** Accessible label — if omitted the icon is treated as decorative */
  label?: string;
}
