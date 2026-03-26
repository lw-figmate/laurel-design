### ToastProvider

**Import**: `import { ToastProvider, useToast } from '@anthropic/laurel-design'`

Context provider for toast notifications. Wrap your app with this.

**Example**:
```tsx
// In root
<ToastProvider>{children}</ToastProvider>

// In any component
const { addToast } = useToast();
addToast({ title: 'Success!', variant: 'success' });
```
