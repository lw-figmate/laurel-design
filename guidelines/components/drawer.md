### Drawer

**Purpose**: Slide-out side panel for navigation or secondary content.

**Import**: `import { Drawer } from '@anthropic/laurel-design'`

**Props**:
- `open` — Boolean (required)
- `onClose` — `() => void` (required)
- `placement` — `'left'` | `'right'` (default: `'right'`)
- `title` — String
- `children` — ReactNode

**Example**:
```tsx
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Drawer</Button>
<Drawer open={open} onClose={() => setOpen(false)} title="Settings" placement="right">
  <Text>Drawer content here</Text>
</Drawer>
```

**Guidelines**:
- Use for secondary content or navigation panels.
- For important actions requiring attention, use `Dialog`.
- For mobile-first bottom panels, use `Sheet`.
