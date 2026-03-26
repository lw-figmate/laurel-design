### Avatar

**Purpose**: User avatar displaying an image or initials fallback.

**Import**: `import { Avatar } from '@anthropic/laurel-design'`

**Props**:
- `src` — Image URL
- `alt` — Alt text
- `initials` — Fallback initials (e.g. "JD")
- `size` — `'xs'` | `'sm'` | `'md'` | `'lg'` | `'xl'`
- `shape` — `'circle'` | `'square'`

**Examples**:
```tsx
<Avatar src="/avatar.jpg" alt="Jane Doe" size="md" />
<Avatar initials="JD" size="lg" />
<Avatar src="/user.jpg" alt="User" shape="square" size="sm" />
```

**Guidelines**:
- Always provide `alt` text when using `src`.
- Use `initials` as fallback when no image is available.
- Use `AvatarGroup` to display multiple avatars in a stack.
