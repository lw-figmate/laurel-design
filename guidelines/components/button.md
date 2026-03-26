### Button

**Purpose**: Primary interactive element for triggering actions.

**Import**: `import { Button } from '@anthropic/laurel-design'`

**Props**:
- `variant` — `'primary'` | `'secondary'` | `'outline'` | `'ghost'` | `'danger'` (default: `'primary'`)
- `size` — `'sm'` | `'md'` | `'lg'` (default: `'md'`)
- `disabled` — Boolean
- Extends all native `<button>` attributes

**Variants**:
- `primary` — Brand-colored (gold) fill, white text. Use for primary CTA.
- `secondary` — White fill with border. Use for secondary actions.
- `outline` — Transparent with border. Use alongside primary buttons.
- `ghost` — No background. Use for subtle/tertiary actions.
- `danger` — Red fill. Use for destructive actions (delete, remove).

**Examples**:
```tsx
<Button>Save Changes</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="danger" size="sm">Delete</Button>
<Button variant="ghost" disabled>Loading...</Button>
```

**When to use**:
- Use `primary` for the most important action on the page (1 per section).
- Use `secondary` or `outline` for less important actions.
- Use `danger` only for destructive/irreversible actions.
- Use `ghost` for subtle actions like "Cancel" or toolbar buttons.
