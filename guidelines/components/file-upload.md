### FileUpload

**Import**: `import { FileUpload } from '@anthropic/laurel-design'`

File upload area with drag-and-drop.

**Example**:
```tsx
<FileUpload accept="image/*" maxSize={5242880} onUpload={(files) => handleUpload(files)} />
```
