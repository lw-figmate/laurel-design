### MultiStepForm

**Import**: `import { MultiStepForm } from '@anthropic/laurel-design'`

Wizard-style multi-step form.

**Example**:
```tsx
<MultiStepForm steps={[{ title: 'Account', content: <AccountFields /> }, { title: 'Profile', content: <ProfileFields /> }]} onComplete={handleSubmit} />
```
