### Image

**Purpose**: Responsive image with loading states.

**Import**: `import { Image } from '@anthropic/laurel-design'`

**Props**:
- `fit` — `'cover'` | `'contain'` | `'fill'` | `'none'`
- `radius` — Radius token values
- Extends native `<img>` attributes.

**Example**:
```tsx
<Image src="/photo.jpg" alt="Description" fit="cover" radius="lg" />
```
