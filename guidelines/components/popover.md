### Popover

**Purpose**: Click-triggered popup for interactive content.

**Import**: `import { Popover } from '@anthropic/laurel-design'`

**Props**:
- `trigger` — ReactElement. The element that triggers the popover.
- `children` — ReactNode. Popover content.
- `open`/`onOpenChange` — Controlled state.
- `placement` — `'top'` | `'bottom'` | `'left'` | `'right'`

**Example**:
```tsx
<Popover trigger={<Button variant="secondary">Options</Button>} placement="bottom">
  <div>Popover content here</div>
</Popover>
```

**Guidelines**:
- Use `Popover` for interactive content triggered by click.
- Use `Tooltip` for simple hover hints (non-interactive).
- Use `HoverCard` for rich preview content on hover.
