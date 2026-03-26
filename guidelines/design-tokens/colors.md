# Color Design Tokens

Laurel Design uses a two-tier color token system: **Primitives** (raw color values) and **Semantic** (role-based tokens that map to primitives).

## IMPORTANT: Always use semantic tokens, never primitives

Components and custom styles should ONLY reference semantic tokens (`--laurel-bg-*`, `--laurel-text-*`, etc.). Never use primitive tokens (`--laurel-color-primary-600`) directly — this ensures proper light/dark mode support.

## Token Naming Pattern

Semantic tokens follow: `--laurel-{category}-{role}[-{modifier}]`

Categories: `bg`, `text`, `border`, `ring`, `icon`, `status`

## Background Tokens (`--laurel-bg-*`)

### Surfaces (hierarchy)
- `--laurel-bg-surface` — Default page background (white in light, near-black in dark)
- `--laurel-bg-muted` — Slightly tinted background for secondary sections
- `--laurel-bg-subtle` — Visible but soft background, hover states
- `--laurel-bg-accent` — Stronger tinted background
- `--laurel-bg-elevated` — Elevated surfaces like tooltips/toasts (dark in both modes)
- `--laurel-bg-overlay` — Semi-transparent overlay for modals

### Interactive states
- `--laurel-bg-hover` — Generic hover background
- `--laurel-bg-hover-overlay` — Transparent hover for overlays
- `--laurel-bg-hover-on-elevated` — Hover on dark elevated surfaces
- `--laurel-bg-hover-on-elevated-strong` — Stronger hover on dark elevated surfaces
- `--laurel-bg-control` — Small UI chrome: scrollbar thumbs, switch tracks
- `--laurel-bg-control-hover` — Hover state for control elements

### Semantic colors
- `--laurel-bg-brand` / `--laurel-bg-brand-hover` — Primary brand (gold/amber) for CTA buttons
- `--laurel-bg-brand-muted` / `--laurel-bg-brand-subtle` — Light tinted brand backgrounds
- `--laurel-bg-danger` / `--laurel-bg-danger-hover` — Destructive actions, error states
- `--laurel-bg-success` — Success/confirmation states
- `--laurel-bg-warning` — Warning states

## Text Tokens (`--laurel-text-*`)

- `--laurel-text-primary` — Default body text
- `--laurel-text-secondary` — Less prominent text
- `--laurel-text-tertiary` — Even less prominent
- `--laurel-text-muted` — Subtle text
- `--laurel-text-placeholder` — Placeholder text in inputs
- `--laurel-text-disabled` — Disabled state text
- `--laurel-text-heading` — Heading text (darkest)
- `--laurel-text-link` — Hyperlink text
- `--laurel-text-brand` / `--laurel-text-brand-strong` — Brand-colored text
- `--laurel-text-on-brand` — Text on brand-colored backgrounds (white)
- `--laurel-text-on-elevated` — Text on elevated surfaces (white)
- `--laurel-text-error` / `--laurel-text-error-strong` — Error text
- `--laurel-text-success` — Success text
- `--laurel-text-warning` — Warning text

### On-Color Rules

**CRITICAL**: When using a solid semantic background color, use the matching "on-" text token:

```css
/* ✅ CORRECT */
.primaryButton { background: var(--laurel-bg-brand); color: var(--laurel-text-on-brand); }
.dangerButton { background: var(--laurel-bg-danger); color: var(--laurel-text-on-brand); }

/* ❌ WRONG — same-color tokens clash */
.dangerButton { background: var(--laurel-bg-danger); color: var(--laurel-text-error); }
```

**EXCEPTION**: For muted/subtle brand backgrounds, use regular colored text:
```css
/* ✅ CORRECT — muted background with regular text */
.infoBanner { background: var(--laurel-bg-brand-muted); color: var(--laurel-text-brand); }
```

## Border Tokens (`--laurel-border-*`)

- `--laurel-border-default` — Standard border
- `--laurel-border-subtle` — Lighter border
- `--laurel-border-muted` — Lightest border
- `--laurel-border-strong` — Prominent border
- `--laurel-border-brand` / `--laurel-border-brand-accent` / `--laurel-border-brand-muted` — Brand-colored borders
- `--laurel-border-error` / `--laurel-border-error-muted` — Error state borders

## Ring Tokens (`--laurel-ring-*`) — Focus rings

- `--laurel-ring-brand` — Brand focus ring (default)
- `--laurel-ring-brand-strong` — Strong brand ring
- `--laurel-ring-brand-subtle` — Subtle brand ring
- `--laurel-ring-neutral` — Neutral focus ring
- `--laurel-ring-error` — Error focus ring
- `--laurel-ring-on-surface` — Ring on colored surfaces

## Icon Tokens (`--laurel-icon-*`)

- `--laurel-icon-muted` — Default muted icon color
- `--laurel-icon-brand` / `--laurel-icon-brand-muted` — Brand-colored icons
- `--laurel-icon-success` / `--laurel-icon-warning` / `--laurel-icon-error` — Status icons

## Status Tokens (`--laurel-status-*`)

For Alert, Badge, and Tag components. Each status has four tokens:
- `--laurel-status-{status}-bg` — Background
- `--laurel-status-{status}-border` — Border
- `--laurel-status-{status}-text` — Text
- `--laurel-status-{status}-icon` — Icon

Statuses: `info`, `success`, `warning`, `error`

## Primitive Color Scales (reference only)

The primitives define the raw palette. Do not use these directly in components.

- **Primary** (gold/amber): 50–950 scale
- **Neutral** (gray): 0–950 scale
- **Success** (green): 50–950 scale
- **Warning** (orange-red): 50–950 scale
- **Error** (red): 50–950 scale
