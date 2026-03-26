# Spacing and Shape Tokens

## Spacing (`--laurel-space-*`)

Spacing tokens use a numeric scale where the number roughly corresponds to a 4px grid:

| Token | Value | Pixels |
|-------|-------|--------|
| `--laurel-space-0` | 0 | 0 |
| `--laurel-space-0-5` | 0.125rem | 2px |
| `--laurel-space-0-75` | 0.1875rem | 3px |
| `--laurel-space-1` | 0.25rem | 4px |
| `--laurel-space-1-5` | 0.375rem | 6px |
| `--laurel-space-2` | 0.5rem | 8px |
| `--laurel-space-2-5` | 0.625rem | 10px |
| `--laurel-space-3` | 0.75rem | 12px |
| `--laurel-space-3-5` | 0.875rem | 14px |
| `--laurel-space-4` | 1rem | 16px |
| `--laurel-space-5` | 1.25rem | 20px |
| `--laurel-space-6` | 1.5rem | 24px |
| `--laurel-space-8` | 2rem | 32px |
| `--laurel-space-10` | 2.5rem | 40px |
| `--laurel-space-12` | 3rem | 48px |
| `--laurel-space-16` | 4rem | 64px |
| `--laurel-space-20` | 5rem | 80px |
| `--laurel-space-24` | 6rem | 96px |

### Common spacing patterns:
- **Tight padding** (badges, tags): `space-1` to `space-2`
- **Standard padding** (buttons, inputs): `space-2` to `space-4`
- **Card/section padding**: `space-4` to `space-6`
- **Page-level spacing**: `space-8` to `space-16`
- **Section gaps**: `space-6` to `space-12`

Use via Tailwind arbitrary values:
```tsx
<div className="p-[var(--laurel-space-4)] gap-[var(--laurel-space-3)]">
```

## Border Radii (`--laurel-radius-*`)

| Token | Value | Use for |
|-------|-------|---------|
| `--laurel-radius-none` | 0 | Sharp corners |
| `--laurel-radius-xs` | 3px | Tiny elements |
| `--laurel-radius-sm` | 4px | Badges, tags |
| `--laurel-radius-md` | 6px | Buttons, inputs (default) |
| `--laurel-radius-lg` | 8px | Cards, panels |
| `--laurel-radius-lg-xl` | 10px | Large cards |
| `--laurel-radius-xl` | 12px | Modals, dialogs |
| `--laurel-radius-2xl` | 16px | Large containers |
| `--laurel-radius-3xl` | 20px | XL containers |
| `--laurel-radius-4xl` | 24px | Hero sections |
| `--laurel-radius-5xl` | 28px | Display elements |
| `--laurel-radius-full` | 9999px | Circles, pills |

## Border Widths (`--laurel-border-width-*`)

| Token | Value |
|-------|-------|
| `--laurel-border-width-thin` | 1px |
| `--laurel-border-width-medium` | 1.5px |
| `--laurel-border-width-thick` | 2px |
| `--laurel-border-width-extra-thick` | 2.5px |
| `--laurel-border-width-heavy` | 3px |

## Shadows (`--laurel-shadow-*`)

| Token | Use for |
|-------|---------|
| `--laurel-shadow-sm` | Subtle depth (cards, buttons) |
| `--laurel-shadow-md` | Medium depth (dropdowns, popovers) |
| `--laurel-shadow-lg` | Strong depth (modals, dialogs) |
| `--laurel-shadow-xl` | Maximum depth (floating panels) |

## Motion Tokens

| Token | Value | Use for |
|-------|-------|---------|
| `--laurel-duration-fast` | 100ms | Hover/focus states |
| `--laurel-duration-normal` | 200ms | Standard transitions |
| `--laurel-duration-slow` | 300ms | Expand/collapse |
| `--laurel-duration-slower` | 500ms | Page transitions |
| `--laurel-ease-default` | ease-in-out | Standard easing |
| `--laurel-ease-in` | ease-in | Enter from outside |
| `--laurel-ease-out` | ease-out | Exit to outside |
| `--laurel-ease-bounce` | bounce | Playful interactions |
