### Checkbox

**Purpose**: Checkbox input for boolean selections.

**Import**: `import { Checkbox } from '@anthropic/laurel-design'`

**Props**:
- `checkboxSize` — `'sm'` | `'md'` | `'lg'`
- `indeterminate` — Boolean
- `error` — Boolean
- Extends native `<input>` attributes.

**Example**:
```tsx
<Checkbox checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
<Checkbox checkboxSize="lg" indeterminate />
```

**Guidelines**:
- Use `CheckboxGroup` for groups of related checkboxes.
- Pair with `Label` for accessible text.
