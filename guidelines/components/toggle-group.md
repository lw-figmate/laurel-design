### ToggleGroup

**Import**: `import { ToggleGroup, ToggleGroupItem } from '@anthropic/laurel-design'`

Exclusive toggle button group (like a segmented control).

**Example**:
```tsx
<ToggleGroup value={view} onValueChange={setView}>
  <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
  <ToggleGroupItem value="list">List</ToggleGroupItem>
</ToggleGroup>
```
