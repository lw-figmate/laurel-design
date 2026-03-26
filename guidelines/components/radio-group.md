### RadioGroup

**Purpose**: Group of radio buttons for single selection.

**Import**: `import { RadioGroup } from '@anthropic/laurel-design'`

**Example**:
```tsx
<RadioGroup label="Plan" options={[{ value: 'free', label: 'Free' }, { value: 'pro', label: 'Pro' }]} value={plan} onChange={setPlan} />
```
