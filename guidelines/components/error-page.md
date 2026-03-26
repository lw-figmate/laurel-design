### ErrorPage

**Import**: `import { ErrorPage } from '@anthropic/laurel-design'`

Error/404 page template.

**Example**:
```tsx
<ErrorPage code={404} title="Page Not Found" description="The page you're looking for doesn't exist." action={<Button onClick={() => navigate('/')}>Go Home</Button>} />
```
