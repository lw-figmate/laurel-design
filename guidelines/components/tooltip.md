### Tooltip

**Purpose**: Hover hint for providing additional context about an element.

**Import**: `import { Tooltip } from '@anthropic/laurel-design'`

**Props**:
- `content` — ReactNode. Tooltip text.
- `children` — ReactElement. The trigger element.
- `placement` — `'top'` | `'bottom'` | `'left'` | `'right'`
- `delay` — Number (ms, default: 200)

**Example**:
```tsx
<Tooltip content="Save your changes">
  <Button>Save</Button>
</Tooltip>
```
