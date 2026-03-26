### Label

**Purpose**: Form field label element.

**Import**: `import { Label } from '@anthropic/laurel-design'`

**Props**:
- `required` — Boolean (shows asterisk)
- `disabled` — Boolean
- `size` — `'sm'` | `'md'` | `'lg'`
- Extends native `<label>` attributes.

**Example**:
```tsx
<Label htmlFor="email" required>Email Address</Label>
<Input id="email" type="email" />
```

**Guidelines**:
- Prefer using `FormField` which combines Label + Input + error handling.
