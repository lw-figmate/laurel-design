### Toast

**Purpose**: Brief notification that auto-dismisses.

**Import**: `import { Toast } from '@anthropic/laurel-design'`

**Props**:
- `variant` — `'info'` | `'success'` | `'warning'` | `'error'`
- `message` — String (required)
- `onDismiss` — `() => void`
- `action` — `{ label: string; onClick: () => void }`

**Usage**: Typically used via `ToastProvider` and `useToast()` hook:
```tsx
import { ToastProvider, useToast } from '@anthropic/laurel-design';

// Wrap app
<ToastProvider>{children}</ToastProvider>

// In components
const { addToast } = useToast();
addToast({ title: 'Saved!', variant: 'success' });
```

**Guidelines**:
- Use for brief, non-critical notifications.
- For persistent inline messages, use `Alert`.
- For page-wide announcements, use `Banner`.
