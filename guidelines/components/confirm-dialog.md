### ConfirmDialog

**Import**: `import { ConfirmDialog } from '@anthropic/laurel-design'`

Pre-built confirmation modal with confirm/cancel buttons.

**Example**:
```tsx
<ConfirmDialog open={open} onClose={() => setOpen(false)} onConfirm={handleDelete} title="Delete Item" confirmLabel="Delete" variant="danger">
  Are you sure? This cannot be undone.
</ConfirmDialog>
```

**Guidelines**: Prefer `ConfirmDialog` over building a custom Dialog for confirm/cancel flows.
