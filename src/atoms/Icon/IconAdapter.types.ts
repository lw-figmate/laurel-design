import type { ComponentType } from 'react';
import type { IconSize } from './Icon.types';

export interface IconAdapterProps extends Omit<React.SVGAttributes<SVGSVGElement>, 'children'> {
  /** The external icon component (e.g. from lucide-react or @heroicons/react) */
  icon: ComponentType<React.SVGAttributes<SVGSVGElement>>;
  /** Visual size of the icon */
  size?: IconSize;
  /** Accessible label — if omitted the icon is treated as decorative */
  label?: string;
}
