### InputGroup

**Purpose**: Input with addons (prefix/suffix elements).

**Import**: `import { InputGroup } from '@anthropic/laurel-design'`

**Example**:
```tsx
<InputGroup prefix="$" suffix=".00">
  <Input placeholder="0" />
</InputGroup>

<InputGroup prefix={<Icon name="search" size="sm" />}>
  <Input placeholder="Search..." />
</InputGroup>
```
