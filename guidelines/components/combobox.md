### Combobox

**Purpose**: Searchable select dropdown for filtering through options.

**Import**: `import { Combobox } from '@anthropic/laurel-design'`

**Props**:
- `options` — `ComboboxOption[]` (required, `{ value: string; label: string }`)
- `value` / `onValueChange` — Controlled value
- `placeholder` — String
- `onInputChange` — `(query: string) => void`

**Example**:
```tsx
<Combobox
  placeholder="Search countries..."
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
  ]}
  value={country}
  onValueChange={setCountry}
/>
```

**Guidelines**:
- Use for >20 options or when search/filter is needed.
- For simple dropdowns with <20 options, use `Select`.
