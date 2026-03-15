import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useFocusTrap } from './useFocusTrap';
import { useRef } from 'react';

describe('useFocusTrap', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  function createTrapContainer() {
    const wrapper = document.createElement('div');
    const first = document.createElement('button');
    first.textContent = 'First';
    const second = document.createElement('button');
    second.textContent = 'Second';
    const last = document.createElement('button');
    last.textContent = 'Last';
    wrapper.appendChild(first);
    wrapper.appendChild(second);
    wrapper.appendChild(last);
    container.appendChild(wrapper);
    return { wrapper, first, second, last };
  }

  it('wraps focus from last to first on Tab', () => {
    const { wrapper, first, last } = createTrapContainer();
    last.focus();

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(wrapper);
      useFocusTrap(ref, true);
    });

    const event = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true });
    const preventSpy = vi.spyOn(event, 'preventDefault');
    wrapper.dispatchEvent(event);

    expect(preventSpy).toHaveBeenCalled();
    expect(document.activeElement).toBe(first);
  });

  it('wraps focus from first to last on Shift+Tab', () => {
    const { wrapper, first, last } = createTrapContainer();
    first.focus();

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(wrapper);
      useFocusTrap(ref, true);
    });

    const event = new KeyboardEvent('keydown', {
      key: 'Tab',
      shiftKey: true,
      bubbles: true,
    });
    const preventSpy = vi.spyOn(event, 'preventDefault');
    wrapper.dispatchEvent(event);

    expect(preventSpy).toHaveBeenCalled();
    expect(document.activeElement).toBe(last);
  });

  it('does not trap when active is false', () => {
    const { wrapper, last } = createTrapContainer();
    last.focus();

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(wrapper);
      useFocusTrap(ref, false);
    });

    const event = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true });
    const preventSpy = vi.spyOn(event, 'preventDefault');
    wrapper.dispatchEvent(event);

    expect(preventSpy).not.toHaveBeenCalled();
  });

  it('does nothing for non-Tab keys', () => {
    const { wrapper, last } = createTrapContainer();
    last.focus();

    renderHook(() => {
      const ref = useRef<HTMLDivElement>(wrapper);
      useFocusTrap(ref, true);
    });

    const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
    const preventSpy = vi.spyOn(event, 'preventDefault');
    wrapper.dispatchEvent(event);

    expect(preventSpy).not.toHaveBeenCalled();
  });

  it('cleans up listener on unmount', () => {
    const { wrapper, last, first } = createTrapContainer();
    last.focus();

    const { unmount } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(wrapper);
      useFocusTrap(ref, true);
    });

    unmount();

    const event = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true });
    const preventSpy = vi.spyOn(event, 'preventDefault');
    wrapper.dispatchEvent(event);

    expect(preventSpy).not.toHaveBeenCalled();
  });
});
