### Breadcrumb

**Purpose**: Navigation breadcrumb trail showing page hierarchy.

**Import**: `import { Breadcrumb, BreadcrumbItem } from '@anthropic/laurel-design'`

**Props**:
- `Breadcrumb`: `separator` — ReactNode (default: "/")
- `BreadcrumbItem`: `href` — String (omit for current page), `active` — Boolean

**Example**:
```tsx
<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem active>Widget</BreadcrumbItem>
</Breadcrumb>
```
