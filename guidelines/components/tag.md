### Tag

**Purpose**: Categorization label, optionally dismissible.

**Import**: `import { Tag } from '@anthropic/laurel-design'`

**Props**:
- `variant` — `'default'` | `'primary'` | `'success'` | `'warning'` | `'error'`
- `size` — `'sm'` | `'md'` | `'lg'`
- `onDismiss` — `() => void` (renders dismiss button)
- `dismissLabel` — String (accessible label for dismiss)

**Example**:
```tsx
<Tag variant="primary">React</Tag>
<Tag variant="success" onDismiss={() => {}}>Completed</Tag>
<Tag variant="error" size="sm">Critical</Tag>
```
