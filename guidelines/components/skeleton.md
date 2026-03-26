### Skeleton

**Purpose**: Loading placeholder that mimics content layout.

**Import**: `import { Skeleton } from '@anthropic/laurel-design'`

**Props**:
- `variant` — `'rect'` | `'circle'` | `'text'`
- `width` / `height` — CSS value
- `lines` — Number (for `variant="text"`)

**Example**:
```tsx
<Skeleton variant="circle" width={48} height={48} />
<Skeleton variant="text" lines={3} />
<Skeleton variant="rect" width="100%" height={200} />
```
