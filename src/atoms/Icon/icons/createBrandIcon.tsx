import { forwardRef } from 'react';
import { Icon } from '../Icon';
import type { NamedIconProps } from './types';

/**
 * Factory that wraps a simple-icons object as a React component.
 * simple-icons use a 24×24 viewBox, so we override the default 20×20.
 */
export function createBrandIcon(si: { path: string }, name: string) {
  const Component = forwardRef<SVGSVGElement, NamedIconProps>((props, ref) => (
    <Icon ref={ref} viewBox="0 0 24 24" {...props}>
      <path d={si.path} />
    </Icon>
  ));
  Component.displayName = name;
  return Component;
}
