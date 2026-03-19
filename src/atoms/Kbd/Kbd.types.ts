import type { ComponentPropsWithRef } from 'react';

export const KBD_SIZES = ['sm', 'md', 'lg'] as const;
export const KBD_VARIANTS = ['subtle', 'outline', 'plain'] as const;

export type KbdSize = (typeof KBD_SIZES)[number];
export type KbdVariant = (typeof KBD_VARIANTS)[number];

/** Displays a keyboard shortcut or key combination. */
export interface KbdProps extends ComponentPropsWithRef<'kbd'> {
  /** Size of the key */
  size?: KbdSize;
  /** Visual style */
  variant?: KbdVariant;
}
