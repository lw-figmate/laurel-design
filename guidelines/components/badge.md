### Badge

**Purpose**: Status labels and indicators.

**Import**: `import { Badge } from '@anthropic/laurel-design'`

**Props**:
- `variant` — `'default'` | `'neutral'` | `'primary'` | `'success'` | `'warning'` | `'error'`
- `size` — `'sm'` | `'md'` | `'lg'`
- `badgeStyle` — `'subtle'` | `'solid'` | `'outline'`

**Examples**:
```tsx
<Badge variant="success">Active</Badge>
<Badge variant="error" badgeStyle="solid">Failed</Badge>
<Badge variant="primary" size="sm">New</Badge>
```
