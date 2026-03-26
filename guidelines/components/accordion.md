### Accordion

**Purpose**: Collapsible content sections with expandable items.

**Import**: `import { Accordion, AccordionItem } from '@anthropic/laurel-design'`

**Props**:
- `Accordion`: `multiple` (allow multiple open), `value`/`onValueChange` (controlled), `defaultValue` (uncontrolled)
- `AccordionItem`: `value` (required identifier), `title` (trigger label), `disabled`

**Example**:
```tsx
<Accordion defaultValue={['faq-1']}>
  <AccordionItem value="faq-1" title="What is Laurel Design?">
    A comprehensive React component library.
  </AccordionItem>
  <AccordionItem value="faq-2" title="How do I install it?">
    Install via npm and import components.
  </AccordionItem>
</Accordion>
```
