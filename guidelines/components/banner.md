### Banner

**Purpose**: Full-width announcement bar for important messages.

**Import**: `import { Banner } from '@anthropic/laurel-design'`

**Props**:
- `variant` — `'info'` | `'success'` | `'warning'` | `'error'`
- `action` — ReactNode (optional action button/link)
- `onDismiss` — `() => void`

**Example**:
```tsx
<Banner variant="info" action={<Button variant="ghost" size="sm">Learn more</Button>} onDismiss={() => {}}>
  New features are available. Update your settings.
</Banner>
```

**Guidelines**:
- Place at the top of the page or section.
- For inline feedback within content, use `Alert`.
