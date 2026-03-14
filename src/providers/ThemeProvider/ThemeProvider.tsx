import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ThemeContextValue, ThemeMode, ThemeProviderProps } from './ThemeProvider.types';

const STORAGE_KEY_DEFAULT = 'laurel-theme';

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getSystemPreference(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function resolveMode(mode: ThemeMode): 'light' | 'dark' {
  return mode === 'system' ? getSystemPreference() : mode;
}

export function ThemeProvider({
  defaultMode,
  storageKey = STORAGE_KEY_DEFAULT,
  children,
}: ThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (defaultMode) return defaultMode;
    if (typeof window === 'undefined') return 'system';
    const stored = localStorage.getItem(storageKey);
    if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
    return 'system';
  });

  const [resolved, setResolved] = useState<'light' | 'dark'>(() => resolveMode(mode));

  const setMode = useCallback(
    (next: ThemeMode) => {
      setModeState(next);
      localStorage.setItem(storageKey, next);
    },
    [storageKey],
  );

  // Apply data-theme attribute and listen for system changes
  useEffect(() => {
    const apply = () => {
      const value = resolveMode(mode);
      setResolved(value);
      document.documentElement.setAttribute('data-theme', value);
    };

    apply();

    if (mode !== 'system') return;

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => apply();
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [mode]);

  const value = useMemo<ThemeContextValue>(
    () => ({ mode, resolved, setMode }),
    [mode, resolved, setMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
