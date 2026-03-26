### Collapsible

**Purpose**: Single expand/collapse content section.

**Import**: `import { Collapsible } from '@anthropic/laurel-design'`

**Example**:
```tsx
<Collapsible trigger={<Button variant="ghost">Show Details</Button>}>
  <Text>Hidden content revealed on expand.</Text>
</Collapsible>
```

**Guidelines**: For multiple collapsible sections, use `Accordion` instead.
