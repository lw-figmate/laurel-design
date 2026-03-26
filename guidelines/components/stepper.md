### Stepper

**Purpose**: Multi-step progress indicator.

**Import**: `import { Stepper, Step } from '@anthropic/laurel-design'`

**Example**:
```tsx
<Stepper activeStep={1}>
  <Step title="Account" description="Create your account" />
  <Step title="Profile" description="Set up your profile" />
  <Step title="Complete" description="All done" />
</Stepper>
```
