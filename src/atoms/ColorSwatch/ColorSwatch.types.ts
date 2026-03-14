import type { ComponentPropsWithRef } from 'react';

export interface ColorSwatchProps extends Omit<ComponentPropsWithRef<'button'>, 'color'> {
  /** CSS color value */
  color: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the swatch is selected */
  selected?: boolean;
}
