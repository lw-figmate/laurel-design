# Laurel Design

A comprehensive React component library built with TypeScript, Tailwind CSS v4, and CSS custom-property design tokens.

## Features

- **28+ atoms** — Button, Input, Text, Badge, Avatar, Stack, Flex, Grid, Container, Code, Transition, and more
- **45+ molecules** — Dialog, Tabs, Toast, Accordion, DatePicker, CommandPalette, Carousel, and more
- **30+ organisms** — DataTable, KanbanBoard, LoginForm, Sidebar, Header, ChatWidget, and more
- **10+ page templates** — Dashboard, Auth, Landing, Pricing, Blog, Analytics, and more
- **Design tokens** — colors, spacing, typography, shapes, motion, z-index, breakpoints, opacity
- **Dark mode** — built-in ThemeProvider with light, dark, and system modes
- **Accessible** — ARIA attributes, keyboard navigation, focus management, automated axe audits
- **Tree-shakeable** — ES module output with preserved module structure
- **Fully typed** — TypeScript declarations for every component and utility

## Installation

```bash
npm install laurel-design
```

### Peer Dependencies

```bash
npm install react react-dom
```

## Quick Start

```tsx
import { Button, Text, ThemeProvider } from 'laurel-design';
import 'laurel-design/styles';

function App() {
  return (
    <ThemeProvider>
      <Text as="h1" size="2xl" weight="bold">
        Hello, Laurel
      </Text>
      <Button variant="primary" size="md">
        Get Started
      </Button>
    </ThemeProvider>
  );
}
```

## Theming

Wrap your app with `ThemeProvider` to enable theme switching:

```tsx
import { ThemeProvider, useTheme } from 'laurel-design';

function ThemeToggle() {
  const { mode, setMode } = useTheme();
  return (
    <button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
      Current: {mode}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider defaultMode="system">
      <ThemeToggle />
    </ThemeProvider>
  );
}
```

Modes: `'light'` | `'dark'` | `'system'`

The provider persists the choice to `localStorage` and applies a `data-theme` attribute on the document root. All semantic tokens automatically adapt.

## Design Tokens

Tokens are CSS custom properties organized into layers:

| Category | Prefix | Example |
|----------|--------|---------|
| Colors | `--laurel-color-*` | `--laurel-color-primary-500` |
| Semantic | `--laurel-bg-*`, `--laurel-text-*` | `--laurel-bg-brand`, `--laurel-text-muted` |
| Spacing | `--laurel-space-*` | `--laurel-space-4` (1rem) |
| Typography | `--laurel-font-*` | `--laurel-font-size-lg` |
| Shapes | `--laurel-radius-*` | `--laurel-radius-md` |
| Motion | `--laurel-duration-*`, `--laurel-ease-*` | `--laurel-duration-normal` |
| Z-index | `--laurel-z-*` | `--laurel-z-modal` (1400) |
| Breakpoints | `--laurel-breakpoint-*` | `--laurel-breakpoint-md` (768px) |
| Opacity | `--laurel-opacity-*` | `--laurel-opacity-50` |

## Layout Components

```tsx
import { Stack, Flex, Grid, Container } from 'laurel-design';

// Vertical stack with spacing
<Stack gap="4" align="start">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Stack>

// Horizontal flex layout
<Flex align="center" justify="between" gap="4">
  <Logo />
  <Nav />
</Flex>

// Responsive grid
<Grid columns="3" gap="6">
  <Card />
  <Card />
  <Card />
</Grid>

// Centered, padded page wrapper
<Container size="lg">
  <PageContent />
</Container>
```

## Form Validation

Built-in validators and the `useFormField` hook for lightweight form management:

```tsx
import { Input, Label, Text } from 'laurel-design';
import { useFormField, validators } from 'laurel-design';

function SignupForm() {
  const email = useFormField('', [validators.required(), validators.email()]);
  const password = useFormField('', [
    validators.required(),
    validators.minLength(8),
  ]);

  return (
    <form>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" {...email.getInputProps('email')} />
      {email.error && <Text size="sm">{email.error}</Text>}

      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" {...password.getInputProps('password')} />
      {password.error && <Text size="sm">{password.error}</Text>}
    </form>
  );
}
```

Available validators: `required()`, `minLength(n)`, `maxLength(n)`, `pattern(regex)`, `email()`

## Hooks

| Hook | Description |
|------|-------------|
| `useTheme()` | Access current theme mode and setter |
| `useMediaQuery(query)` | Subscribe to a CSS media query |
| `useDisclosure()` | Boolean open/close/toggle state |
| `useClickOutside(ref, handler)` | Detect clicks outside an element |
| `useFocusTrap(ref, active)` | Trap Tab focus within a container |
| `useFormField(initial, rules)` | Manage field value, validation, and touched state |

## Utilities

| Utility | Description |
|---------|-------------|
| `cn(...classes)` | Merge class names, filtering falsy values |
| `composeRefs(...refs)` | Combine multiple refs into one callback ref |
| `validators.*` | Built-in validation rules |
| `validate(value, rules)` | Run rules against a value |
| `validateForm(values, schema)` | Validate all fields and return an errors map |

## Development

```bash
npm install           # install dependencies
npm run dev           # start dev server
npm run storybook     # launch Storybook
npm test              # run unit tests
npm run test:e2e      # run Playwright E2E tests
npm run build:lib     # build library (JS + types + CSS)
npm run lint          # lint with ESLint
```

## Component Catalog

Run `npm run storybook` and visit `http://localhost:6006` to browse all components with interactive examples and auto-generated documentation.

## License

MIT
