### CommandPalette

**Import**: `import { CommandPalette } from '@anthropic/laurel-design'`

Keyboard-driven command menu (Cmd+K style).

**Example**:
```tsx
<CommandPalette open={open} onClose={() => setOpen(false)} items={[{ id: '1', label: 'Go to Dashboard', onSelect: () => navigate('/dashboard') }]} />
```
