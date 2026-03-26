### OnboardingWizard

**Import**: `import { OnboardingWizard } from '@anthropic/laurel-design'`

Onboarding step wizard.

**Example**:
```tsx
<OnboardingWizard steps={[{ title: 'Welcome', content: <WelcomeStep /> }, { title: 'Setup', content: <SetupStep /> }]} onComplete={handleComplete} />
```
