import { describe, it, expect, vi } from 'vitest';
import { composeRefs } from './composeRefs';
import { createRef } from 'react';

describe('composeRefs', () => {
  it('sets value on a callback ref', () => {
    const callbackRef = vi.fn();
    const composed = composeRefs(callbackRef);
    const node = document.createElement('div');

    composed(node);
    expect(callbackRef).toHaveBeenCalledWith(node);
  });

  it('sets value on a RefObject', () => {
    const refObject = createRef<HTMLDivElement>();
    const composed = composeRefs(refObject);
    const node = document.createElement('div');

    composed(node);
    expect(refObject.current).toBe(node);
  });

  it('composes multiple refs together', () => {
    const callbackRef = vi.fn();
    const refObject = createRef<HTMLDivElement>();
    const composed = composeRefs(callbackRef, refObject);
    const node = document.createElement('div');

    composed(node);
    expect(callbackRef).toHaveBeenCalledWith(node);
    expect(refObject.current).toBe(node);
  });

  it('skips undefined refs', () => {
    const callbackRef = vi.fn();
    const composed = composeRefs(undefined, callbackRef, undefined);
    const node = document.createElement('div');

    composed(node);
    expect(callbackRef).toHaveBeenCalledWith(node);
  });

  it('handles null node (unmount)', () => {
    const callbackRef = vi.fn();
    const refObject = createRef<HTMLDivElement>();
    const composed = composeRefs(callbackRef, refObject);

    composed(null as unknown as HTMLDivElement);
    expect(callbackRef).toHaveBeenCalledWith(null);
    expect(refObject.current).toBeNull();
  });

  it('works with no refs', () => {
    const composed = composeRefs<HTMLDivElement>();
    const node = document.createElement('div');
    expect(() => composed(node)).not.toThrow();
  });
});
