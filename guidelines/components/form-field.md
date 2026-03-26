### FormField

**Purpose**: Wraps an input with label, error message, and helper text.

**Import**: `import { FormField } from '@anthropic/laurel-design'`

**Props**:
- `label` — String (required). Label text.
- `errorMessage` — String. Error text (hides helperText when set).
- `helperText` — String. Helper text below input.
- `required` — Boolean. Shows asterisk.
- Extends all `Input` props.

**Example**:
```tsx
<FormField label="Email" type="email" required placeholder="you@example.com" helperText="We'll never share your email." />
<FormField label="Password" type="password" errorMessage="Password is required" required />
```
