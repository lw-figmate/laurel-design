### Input

**Purpose**: Single-line text input field.

**Import**: `import { Input } from '@anthropic/laurel-design'`

**Props**:
- `inputSize` — `'sm'` | `'md'` | `'lg'` (default: `'md'`)
- `error` — Boolean. Shows red error border.
- Extends all native `<input>` attributes except `size`.

**Examples**:
```tsx
<Input placeholder="Enter your name" />
<Input type="email" inputSize="lg" />
<Input error placeholder="Invalid value" />
<Input type="password" disabled />
```

**Guidelines**:
- Wrap with `FormField` for label, error message, and helper text.
- Use `inputSize` (not `size`) to set visual size.
- For multiline text, use `Textarea` instead.
- For searchable dropdowns, use `Combobox`.
