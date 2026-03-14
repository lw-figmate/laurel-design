export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeContextValue {
  /** The currently active mode (light, dark, or system). */
  mode: ThemeMode;
  /** The resolved appearance — always 'light' or 'dark'. */
  resolved: 'light' | 'dark';
  /** Update the active mode. */
  setMode: (mode: ThemeMode) => void;
}

export interface ThemeProviderProps {
  /** Initial mode. Defaults to the value stored in localStorage, or 'system'. */
  defaultMode?: ThemeMode;
  /** localStorage key used to persist the mode. */
  storageKey?: string;
  children: React.ReactNode;
}
