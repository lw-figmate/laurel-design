import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useMediaQuery } from './useMediaQuery';

describe('useMediaQuery', () => {
  let listeners: Array<(e: MediaQueryListEvent) => void>;
  let matchesValue: boolean;

  beforeEach(() => {
    listeners = [];
    matchesValue = false;

    vi.stubGlobal('matchMedia', vi.fn((query: string) => ({
      matches: matchesValue,
      media: query,
      addEventListener: (_: string, cb: (e: MediaQueryListEvent) => void) => {
        listeners.push(cb);
      },
      removeEventListener: (_: string, cb: (e: MediaQueryListEvent) => void) => {
        listeners = listeners.filter((l) => l !== cb);
      },
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns false when query does not match', () => {
    matchesValue = false;
    const { result } = renderHook(() => useMediaQuery('(max-width: 768px)'));
    expect(result.current).toBe(false);
  });

  it('returns true when query matches', () => {
    matchesValue = true;
    const { result } = renderHook(() => useMediaQuery('(max-width: 768px)'));
    expect(result.current).toBe(true);
  });

  it('updates when media query changes', () => {
    matchesValue = false;
    const { result } = renderHook(() => useMediaQuery('(max-width: 768px)'));
    expect(result.current).toBe(false);

    act(() => {
      for (const listener of listeners) {
        listener({ matches: true } as MediaQueryListEvent);
      }
    });

    expect(result.current).toBe(true);
  });

  it('cleans up listener on unmount', () => {
    matchesValue = false;
    const { unmount } = renderHook(() => useMediaQuery('(max-width: 768px)'));
    expect(listeners.length).toBeGreaterThan(0);
    unmount();
    expect(listeners).toHaveLength(0);
  });

  it('re-subscribes when query changes', () => {
    matchesValue = false;
    const { rerender } = renderHook(
      ({ query }) => useMediaQuery(query),
      { initialProps: { query: '(max-width: 768px)' } },
    );

    const initialListenerCount = listeners.length;
    rerender({ query: '(min-width: 1024px)' });
    // Old listener removed, new one added
    expect(listeners).toHaveLength(initialListenerCount);
  });
});
