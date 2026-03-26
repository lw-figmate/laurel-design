## Icons

Laurel Design uses two icon libraries: **Lucide** for general UI icons and **Simple Icons** for brand/logo icons. Icons are rendered via the `Icon` component.

### Usage

```tsx
import { Icon } from '@anthropic/laurel-design';

// Lucide icon (general UI)
<Icon name="chevron-down" size="md" />
<Icon name="search" size="sm" />
<Icon name="settings" size="lg" />

// Simple Icons (brand logos) — prefix with "si-"
<Icon name="si-github" size="md" />
<Icon name="si-figma" size="md" />
```

### Icon Sizes

The `Icon` component supports these sizes via the `size` prop:
- `"xs"` — 12px
- `"sm"` — 16px
- `"md"` — 20px (default)
- `"lg"` — 24px
- `"xl"` — 32px

### Common Lucide Icons

Here are frequently used icons:
- Navigation: `chevron-down`, `chevron-right`, `chevron-left`, `chevron-up`, `arrow-left`, `arrow-right`, `menu`, `x`
- Actions: `plus`, `minus`, `edit`, `trash-2`, `copy`, `download`, `upload`, `save`, `refresh-cw`
- Status: `check`, `x`, `alert-triangle`, `alert-circle`, `info`, `check-circle`, `x-circle`
- UI: `search`, `settings`, `filter`, `eye`, `eye-off`, `more-horizontal`, `more-vertical`, `external-link`
- User: `user`, `users`, `log-in`, `log-out`, `bell`, `mail`, `calendar`, `clock`
- File: `file`, `folder`, `image`, `file-text`, `paperclip`
- Communication: `message-circle`, `send`, `phone`, `video`

### IMPORTANT

- Always check that the icon name exists in Lucide before using it. If uncertain, verify in the node_modules directory.
- Do not override icon stroke width — the default looks correct.
- Use semantic token colors for icon coloring via the `className` prop: `text-[var(--laurel-icon-brand)]`, `text-[var(--laurel-icon-error)]`, etc.
