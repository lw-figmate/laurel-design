### Link

**Purpose**: Styled anchor link for navigation.

**Import**: `import { Link } from '@anthropic/laurel-design'`

**Props**:
- `variant` — `'default'` | `'subtle'`
- `size` — `'sm'` | `'md'` | `'lg'`
- `external` — Boolean (opens in new tab with secure rel)
- `disabled` — Boolean
- Extends native `<a>` attributes.

**Example**:
```tsx
<Link href="/about">About Us</Link>
<Link href="https://example.com" external>External Link</Link>
<Link variant="subtle" size="sm">Learn more</Link>
```
