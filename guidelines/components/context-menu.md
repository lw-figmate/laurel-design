### ContextMenu

**Import**: `import { ContextMenu } from '@anthropic/laurel-design'`

Right-click triggered context menu.

**Example**:
```tsx
<ContextMenu items={[{ label: 'Copy', onClick: handleCopy }, { label: 'Paste', onClick: handlePaste }]}>
  <div>Right-click me</div>
</ContextMenu>
```
