### Select

**Purpose**: Dropdown select for choosing from predefined options.

**Import**: `import { Select } from '@anthropic/laurel-design'`

**Props**:
- `selectSize` — `'sm'` | `'md'` | `'lg'`
- `error` — Boolean
- `placeholder` — String. Renders disabled first option.
- Extends native `<select>` attributes.

**Example**:
```tsx
<Select placeholder="Choose a country" selectSize="md">
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
</Select>
```

**Guidelines**:
- Use for 4–20 predefined options.
- For searchable/filterable lists, use `Combobox`.
- For 2–4 options, consider `RadioGroup`.
