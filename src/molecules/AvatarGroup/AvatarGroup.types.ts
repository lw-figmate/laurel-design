import type { ComponentPropsWithRef } from 'react';

export interface AvatarGroupProps extends ComponentPropsWithRef<'div'> {
  /** Maximum number of avatars to show before "+N" */
  max?: number;
  /** Size passed to each Avatar */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
