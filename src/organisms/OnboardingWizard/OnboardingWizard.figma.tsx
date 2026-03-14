import figma from '@figma/code-connect';
import { OnboardingWizard } from './OnboardingWizard';

figma.connect(OnboardingWizard, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_ONBOARDING_WIZARD', {
  props: {},
  example: () => <OnboardingWizard steps={[]} onComplete={() => {}} />,
});
