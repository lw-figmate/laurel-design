### Radio

**Purpose**: Radio button for single selection from a group.

**Import**: `import { Radio } from '@anthropic/laurel-design'`

**Props**:
- `radioSize` — `'sm'` | `'md'` | `'lg'`
- `error` — Boolean
- Extends native `<input>` attributes.

**Example**:
```tsx
<Radio name="plan" value="free" radioSize="md" /> Free
<Radio name="plan" value="pro" radioSize="md" /> Pro
```

**Guidelines**:
- Use `RadioGroup` for a labeled group of radio options.
- Use for 2–4 mutually exclusive options.
- For more options, prefer `Select` or `Combobox`.
