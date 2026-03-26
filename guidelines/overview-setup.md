## Setup

Laurel Design is imported from `@anthropic/laurel-design`. You must import the CSS styles for the design system to render correctly.

### Installation

The package is already installed. Ensure your entry point imports the styles:

```tsx
import '@anthropic/laurel-design/styles';
```

This single import loads all design tokens (colors, spacing, typography, shapes, motion) and any component-level styles.

### Theme Support

Laurel Design supports light and dark themes. Wrap your app with `ThemeProvider`:

```tsx
import { ThemeProvider } from '@anthropic/laurel-design';

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      {/* your app */}
    </ThemeProvider>
  );
}
```

`ThemeProvider` accepts `defaultTheme` of `'light'`, `'dark'`, or `'system'`. It sets a `data-theme` attribute on `<html>` which switches all semantic tokens between light and dark mode values.

### Using the Theme Hook

```tsx
import { useTheme } from '@anthropic/laurel-design';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle theme
    </button>
  );
}
```

### Toast Notifications

For toast notifications, wrap your app with `ToastProvider`:

```tsx
import { ToastProvider, useToast } from '@anthropic/laurel-design';

function App() {
  return (
    <ToastProvider>
      {/* your app */}
    </ToastProvider>
  );
}

function MyComponent() {
  const { addToast } = useToast();
  return (
    <button onClick={() => addToast({ title: 'Saved!', variant: 'success' })}>
      Save
    </button>
  );
}
```

### Styling Approach

Laurel Design uses Tailwind CSS with CSS custom properties (design tokens). Components consume semantic tokens (`--laurel-bg-brand`, `--laurel-text-primary`, etc.) which automatically adapt to the active theme.

Do NOT override component styles with className unless absolutely necessary. Use the component's built-in props (variant, size, etc.) to control appearance.
