import { createElement, forwardRef } from 'react';
import { Icon } from '../Icon';
import type { NamedIconProps } from './types';

type IconNode = readonly [tag: string, attrs: Record<string, string>][];

/**
 * Factory that wraps a Lucide icon node array as a React component.
 * Lucide icons use a 24×24 stroke-based viewBox.
 */
export function createLucideIcon(iconNode: IconNode, name: string) {
  const Component = forwardRef<SVGSVGElement, NamedIconProps>((props, ref) => (
    <Icon
      ref={ref}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {iconNode.map(([tag, attrs], i) => createElement(tag, { key: i, ...attrs }))}
    </Icon>
  ));
  Component.displayName = name;
  return Component;
}
