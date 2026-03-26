### Menu

**Purpose**: Vertical navigation/action menu.

**Import**: `import { Menu, MenuItem } from '@anthropic/laurel-design'`

**Example**:
```tsx
<Menu>
  <MenuItem onClick={() => {}}>Edit</MenuItem>
  <MenuItem onClick={() => {}}>Duplicate</MenuItem>
  <MenuItem onClick={() => {}} variant="danger">Delete</MenuItem>
</Menu>
```

**Guidelines**: For dropdown-triggered menus, use `DropdownMenu`.
