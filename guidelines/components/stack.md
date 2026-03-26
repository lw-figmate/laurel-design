### Stack

**Purpose**: Vertical or horizontal stack layout with consistent spacing.

**Import**: `import { Stack } from '@anthropic/laurel-design'`

**Props**:
- `direction` — `'row'` | `'column'` (default: `'column'`)
- `spacing` — Spacing scale values
- `align` — Flexbox align-items
- `justify` — Flexbox justify-content

**Example**:
```tsx
<Stack spacing="4" direction="column">
  <Text>First item</Text>
  <Text>Second item</Text>
</Stack>

<Stack direction="row" spacing="3" align="center">
  <Avatar initials="JD" size="sm" />
  <Text>Jane Doe</Text>
</Stack>
```

**Guidelines**:
- Use `Stack` for simple vertical/horizontal lists of items.
- For 2D grid layouts, use `Grid`.
- For more flexible flex layouts, use `Flex`.
