### ProgressBar

**Purpose**: Visual progress indicator bar.

**Import**: `import { ProgressBar } from '@anthropic/laurel-design'`

**Props**:
- `value` — Number 0–100 (required)
- `max` — Number (default: 100)
- `label` — String (accessible label)
- `showValue` — Boolean
- `size` — `'sm'` | `'md'` | `'lg'`
- `variant` — `'primary'` | `'success'` | `'warning'` | `'error'`

**Example**:
```tsx
<ProgressBar value={65} label="Upload progress" showValue />
<ProgressBar value={100} variant="success" />
```
