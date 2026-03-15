import type { Ref, RefCallback } from 'react';

/**
 * Composes multiple refs into a single callback ref.
 * Supports both callback refs and RefObject refs.
 */
export function composeRefs<T>(...refs: (Ref<T> | undefined)[]): RefCallback<T> {
  return (node: T) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    }
  };
}
