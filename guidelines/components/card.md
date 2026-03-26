### Card

**Purpose**: Container for grouping related content with optional header and footer.

**Import**: `import { Card, CardHeader, CardBody, CardFooter } from '@anthropic/laurel-design'`

**Props**:
- `Card`: `noPadding` — Boolean. Removes default padding.
- `CardHeader`, `CardBody`, `CardFooter` — Standard div container props.

**Structure**:
```tsx
<Card>
  <CardHeader>Title or header content</CardHeader>
  <CardBody>Main card content</CardBody>
  <CardFooter>Actions or footer content</CardFooter>
</Card>
```

**Examples**:
```tsx
<Card>
  <CardHeader>
    <Text as="h3" size="lg" weight="semibold">User Profile</Text>
  </CardHeader>
  <CardBody>
    <Text>Profile details here.</Text>
  </CardBody>
  <CardFooter>
    <Button variant="secondary">Edit</Button>
  </CardFooter>
</Card>
```

**Guidelines**:
- Always use `CardBody` for the main content area.
- `CardHeader` and `CardFooter` are optional.
- Use `noPadding` when embedding full-bleed content like images.
