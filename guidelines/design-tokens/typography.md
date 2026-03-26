# Typography Tokens

## Font Families

- `--laurel-font-sans` — System UI font stack for all standard text
- `--laurel-font-mono` — Monospace font stack for code

## Font Sizes

| Token | Size | Use for |
|-------|------|---------|
| `--laurel-font-size-4xs` | 9px | Exceptional cases only |
| `--laurel-font-size-3xs` | 10px | Minimal labels, superscripts |
| `--laurel-font-size-2xs` | 11px | Compact UI, badges |
| `--laurel-font-size-xs` | 12px | Small labels, captions |
| `--laurel-font-size-sm` | 14px | Secondary text, descriptions |
| `--laurel-font-size-base` | 16px | Default body text |
| `--laurel-font-size-lg` | 18px | Large body text, small headings |
| `--laurel-font-size-xl` | 20px | Section headings |
| `--laurel-font-size-2xl` | 24px | Page headings |
| `--laurel-font-size-3xl` | 30px | Large headings |
| `--laurel-font-size-4xl` | 32px | Display text |
| `--laurel-font-size-5xl` | 36px | Hero/display text |

IMPORTANT: Always use `--laurel-font-size-base` (16px) for body text. Only use small sizes (`xs` and below) for compact UI elements like badges and metadata. Never use 4xs–3xs for body content.

## Font Weights

| Token | Value | Use for |
|-------|-------|---------|
| `--laurel-font-weight-normal` | 400 | Body text |
| `--laurel-font-weight-medium` | 500 | Emphasized text, buttons |
| `--laurel-font-weight-semibold` | 600 | Headings, strong labels |
| `--laurel-font-weight-bold` | 700 | Display headings, strong emphasis |

## Line Heights

| Token | Value | Use for |
|-------|-------|---------|
| `--laurel-line-height-none` | 1 | Single-line elements (badges, buttons) |
| `--laurel-line-height-tight` | 1.25 | Headings |
| `--laurel-line-height-normal` | 1.5 | Body text (default) |
| `--laurel-line-height-relaxed` | 1.75 | Long-form reading |

## Usage with Tailwind

Use Tailwind's arbitrary value syntax to reference tokens:

```tsx
<h1 className="text-[length:var(--laurel-font-size-3xl)] font-[var(--laurel-font-weight-bold)] leading-[var(--laurel-line-height-tight)]">
  Page Title
</h1>
```

Or prefer the `Text` component which handles typography automatically:

```tsx
import { Text } from '@anthropic/laurel-design';

<Text size="3xl" weight="bold">Page Title</Text>
<Text size="base">Body paragraph text.</Text>
<Text size="sm" weight="medium" color="secondary">Caption text</Text>
```
