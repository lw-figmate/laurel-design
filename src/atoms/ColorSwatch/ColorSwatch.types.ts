import type { ComponentPropsWithRef } from 'react';

export const COLOR_SWATCH_SHAPES = ['circle', 'square'] as const;

export type ColorSwatchShape = (typeof COLOR_SWATCH_SHAPES)[number];

export interface ColorSwatchProps extends Omit<ComponentPropsWithRef<'button'>, 'color'> {
  /** CSS color value */
  color: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the swatch is selected */
  selected?: boolean;
  /** Shape of the swatch */
  shape?: ColorSwatchShape;
}
