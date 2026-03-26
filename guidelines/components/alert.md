### Alert

**Purpose**: Inline status message banner for feedback.

**Import**: `import { Alert } from '@anthropic/laurel-design'`

**Props**:
- `variant` — `'info'` | `'success'` | `'warning'` | `'error'` (default: `'info'`)
- `title` — String. Optional title above content.
- `onDismiss` — `() => void`. Shows dismiss button when provided.

**Examples**:
```tsx
<Alert variant="success" title="Saved">Your changes have been saved.</Alert>
<Alert variant="error" onDismiss={() => {}}>Something went wrong. Please try again.</Alert>
<Alert variant="warning">This action cannot be undone.</Alert>
<Alert variant="info">New features are available.</Alert>
```

**Guidelines**:
- Use `Alert` for inline feedback within a page section.
- For full-width announcements at the top of a page, use `Banner`.
- For brief auto-dismissing notifications, use `Toast` via `useToast()`.
