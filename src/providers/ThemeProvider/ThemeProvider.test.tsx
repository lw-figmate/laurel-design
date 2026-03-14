import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { ThemeProvider, useTheme } from './ThemeProvider';
import type { ThemeMode } from './ThemeProvider.types';

function ThemeDisplay() {
  const { mode, resolved, setMode } = useTheme();
  return (
    <div>
      <span data-testid="mode">{mode}</span>
      <span data-testid="resolved">{resolved}</span>
      <button onClick={() => setMode('light')}>light</button>
      <button onClick={() => setMode('dark')}>dark</button>
      <button onClick={() => setMode('system')}>system</button>
    </div>
  );
}

let matchMediaListeners: Array<(e: { matches: boolean }) => void> = [];
let matchMediaMatches = false;
const store: Record<string, string> = {};
let originalLocalStorage: Storage;

beforeEach(() => {
  matchMediaListeners = [];
  matchMediaMatches = false;
  for (const key of Object.keys(store)) delete store[key];
  document.documentElement.removeAttribute('data-theme');

  originalLocalStorage = window.localStorage;
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: (key: string) => store[key] ?? null,
      setItem: (key: string, value: string) => { store[key] = value; },
      removeItem: (key: string) => { delete store[key]; },
      clear: () => { for (const key of Object.keys(store)) delete store[key]; },
      get length() { return Object.keys(store).length; },
      key: (index: number) => Object.keys(store)[index] ?? null,
    },
    writable: true,
    configurable: true,
  });

  window.matchMedia = ((query: string) => ({
    matches: matchMediaMatches,
    media: query,
    addEventListener: (_: string, handler: (e: { matches: boolean }) => void) => {
      matchMediaListeners.push(handler);
    },
    removeEventListener: (_: string, handler: (e: { matches: boolean }) => void) => {
      matchMediaListeners = matchMediaListeners.filter((h) => h !== handler);
    },
    dispatchEvent: () => true,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
  })) as unknown as typeof window.matchMedia;
});

afterEach(() => {
  vi.restoreAllMocks();
  Object.defineProperty(window, 'localStorage', {
    value: originalLocalStorage,
    writable: true,
    configurable: true,
  });
});

describe('ThemeProvider', () => {
  it('defaults to system mode', () => {
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('mode').textContent).toBe('system');
    expect(screen.getByTestId('resolved').textContent).toBe('light');
  });

  it('uses defaultMode prop', () => {
    render(
      <ThemeProvider defaultMode="dark">
        <ThemeDisplay />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('mode').textContent).toBe('dark');
    expect(screen.getByTestId('resolved').textContent).toBe('dark');
  });

  it('sets data-theme attribute on html element', () => {
    render(
      <ThemeProvider defaultMode="dark">
        <ThemeDisplay />
      </ThemeProvider>,
    );
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('switches mode when setMode is called', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>,
    );

    await user.click(screen.getByRole('button', { name: 'dark' }));
    expect(screen.getByTestId('mode').textContent).toBe('dark');
    expect(screen.getByTestId('resolved').textContent).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('persists mode to localStorage', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>,
    );

    await user.click(screen.getByRole('button', { name: 'dark' }));
    expect(store['laurel-theme']).toBe('dark');
  });

  it('reads persisted mode from localStorage', () => {
    store['laurel-theme'] = 'dark';
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('mode').textContent).toBe('dark');
    expect(screen.getByTestId('resolved').textContent).toBe('dark');
  });

  it('uses custom storageKey', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider storageKey="custom-key">
        <ThemeDisplay />
      </ThemeProvider>,
    );

    await user.click(screen.getByRole('button', { name: 'dark' }));
    expect(store['custom-key']).toBe('dark');
    expect(store['laurel-theme']).toBeUndefined();
  });

  it('resolves system mode using matchMedia', () => {
    matchMediaMatches = true;
    render(
      <ThemeProvider defaultMode="system">
        <ThemeDisplay />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('resolved').textContent).toBe('dark');
  });

  it('reacts to system preference changes in system mode', () => {
    render(
      <ThemeProvider defaultMode="system">
        <ThemeDisplay />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('resolved').textContent).toBe('light');

    act(() => {
      matchMediaMatches = true;
      for (const listener of matchMediaListeners) listener({ matches: true });
    });

    expect(screen.getByTestId('resolved').textContent).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('ignores system preference changes when not in system mode', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider defaultMode="system">
        <ThemeDisplay />
      </ThemeProvider>,
    );

    await user.click(screen.getByRole('button', { name: 'light' }));
    expect(screen.getByTestId('resolved').textContent).toBe('light');

    act(() => {
      matchMediaMatches = true;
      for (const listener of matchMediaListeners) listener({ matches: true });
    });

    expect(screen.getByTestId('resolved').textContent).toBe('light');
  });

  it('ignores invalid localStorage values', () => {
    store['laurel-theme'] = 'invalid';
    render(
      <ThemeProvider>
        <ThemeDisplay />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('mode').textContent).toBe('system');
  });
});

describe('useTheme', () => {
  it('throws when used outside ThemeProvider', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<ThemeDisplay />)).toThrow(
      'useTheme must be used within a ThemeProvider',
    );
    spy.mockRestore();
  });
});
