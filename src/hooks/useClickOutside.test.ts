import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useClickOutside } from './useClickOutside';
import { useRef } from 'react';

describe('useClickOutside', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('calls handler when clicking outside the element', () => {
    const handler = vi.fn();
    const el = document.createElement('div');
    container.appendChild(el);

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(el);
      useClickOutside(ref, handler);
    });

    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    expect(handler).toHaveBeenCalledOnce();
  });

  it('does not call handler when clicking inside the element', () => {
    const handler = vi.fn();
    const el = document.createElement('div');
    container.appendChild(el);

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(el);
      useClickOutside(ref, handler);
    });

    el.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    expect(handler).not.toHaveBeenCalled();
  });

  it('does not call handler when clicking a child of the element', () => {
    const handler = vi.fn();
    const el = document.createElement('div');
    const child = document.createElement('button');
    el.appendChild(child);
    container.appendChild(el);

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(el);
      useClickOutside(ref, handler);
    });

    child.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    expect(handler).not.toHaveBeenCalled();
  });

  it('cleans up listener on unmount', () => {
    const handler = vi.fn();
    const el = document.createElement('div');
    container.appendChild(el);

    const { unmount } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(el);
      useClickOutside(ref, handler);
    });

    unmount();
    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    expect(handler).not.toHaveBeenCalled();
  });
});
