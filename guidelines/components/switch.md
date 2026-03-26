### Switch

**Purpose**: Toggle switch for on/off states.

**Import**: `import { Switch } from '@anthropic/laurel-design'`

**Props**:
- `checked` / `defaultChecked` — Boolean
- `onCheckedChange` — `(checked: boolean) => void`
- `switchSize` — `'sm'` | `'md'` | `'lg'`
- `error` — Boolean

**Example**:
```tsx
<Switch checked={enabled} onCheckedChange={setEnabled} aria-label="Enable notifications" />
<Switch switchSize="lg" defaultChecked />
```

**Guidelines**:
- Use for instant toggle actions (no form submission needed).
- Always provide `aria-label` for accessibility.
- For form selections that require submission, use `Checkbox`.
