import figma from '@figma/code-connect';
import { MultiStepForm } from './MultiStepForm';

figma.connect(MultiStepForm, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_MULTI_STEP_FORM', {
  props: {
    orientation: figma.enum('Orientation', { Horizontal: 'horizontal', Vertical: 'vertical' }),
  },
  example: (props) => (
    <MultiStepForm
      steps={[{ title: 'Step 1', content: null }]}
      onSubmit={() => {}}
      {...props}
    />
  ),
});
