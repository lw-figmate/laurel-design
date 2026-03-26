### Textarea

**Purpose**: Multi-line text input area.

**Import**: `import { Textarea } from '@anthropic/laurel-design'`

**Props**:
- `textareaSize` — `'sm'` | `'md'` | `'lg'`
- `error` — Boolean
- `resize` — `'none'` | `'vertical'` | `'horizontal'` | `'both'`
- Extends native `<textarea>` attributes.

**Example**:
```tsx
<Textarea placeholder="Enter your message..." rows={4} />
<Textarea textareaSize="lg" resize="vertical" />
```
