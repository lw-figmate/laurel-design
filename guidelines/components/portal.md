### Portal

**Import**: `import { Portal } from '@anthropic/laurel-design'`

Renders children into a DOM portal (outside the React tree).

**Example**:
```tsx
<Portal>
  <div className="fixed bottom-4 right-4">Floating content</div>
</Portal>
```

Used internally by Dialog, Drawer, Popover, etc.
