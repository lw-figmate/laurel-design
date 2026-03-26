### Slider

**Purpose**: Range slider for selecting numeric values.

**Import**: `import { Slider } from '@anthropic/laurel-design'`

**Props**:
- `value` / `defaultValue` — Number
- `min` / `max` / `step` — Number
- `onValueChange` — `(value: number) => void`
- `showValue` — Boolean
- `size` — `'sm'` | `'md'` | `'lg'`
- `disabled` — Boolean

**Example**:
```tsx
<Slider min={0} max={100} defaultValue={50} showValue />
```
