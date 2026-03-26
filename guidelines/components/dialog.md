### Dialog

**Purpose**: Modal overlay for important actions or confirmations that require user attention.

**Import**: `import { Dialog } from '@anthropic/laurel-design'`

**Props**:
- `open` — Boolean (required). Controls visibility.
- `onClose` — `() => void` (required). Called on overlay click, Escape key, or dismiss button.
- `title` — String. Dialog heading.
- `children` — ReactNode. Dialog body content.

**Examples**:
```tsx
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Dialog</Button>
<Dialog open={open} onClose={() => setOpen(false)} title="Confirm Action">
  <Text>Are you sure you want to proceed?</Text>
  <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
    <Button onClick={() => setOpen(false)}>Confirm</Button>
    <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
  </div>
</Dialog>
```

**Guidelines**:
- Use `Dialog` for critical actions requiring user confirmation.
- For side panels, use `Drawer` instead.
- For simple confirmations, use `ConfirmDialog` organism which provides built-in confirm/cancel buttons.
- Always provide an `onClose` handler.
