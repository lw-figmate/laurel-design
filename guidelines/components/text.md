### Text

**Purpose**: Typography component for rendering text with consistent sizing and weight.

**Import**: `import { Text } from '@anthropic/laurel-design'`

**Props**:
- `as` — `'p'` | `'span'` | `'label'` | `'strong'` | `'em'` | `'small'` | `'h1'`–`'h6'` | `'div'` (default: `'p'`)
- `size` — `'xs'` | `'sm'` | `'md'` | `'base'` | `'lg'` | `'xl'` | `'2xl'` | `'3xl'` | `'4xl'` | `'5xl'`
- `weight` — `'normal'` | `'medium'` | `'semibold'` | `'bold'`
- `truncate` — Boolean. Clips overflowing text with ellipsis.

**Examples**:
```tsx
<Text as="h1" size="3xl" weight="bold">Page Title</Text>
<Text as="h2" size="xl" weight="semibold">Section</Text>
<Text size="base">Body paragraph text.</Text>
<Text size="sm" weight="medium">Caption text</Text>
<Text as="span" truncate>This text will truncate with ellipsis...</Text>
```

**Guidelines**:
- Use `size="base"` (16px) for all body text.
- Use `size="sm"` or smaller only for captions, badges, and metadata.
- Pair heading elements (`h1`–`h6`) with appropriate sizes for semantic HTML.
