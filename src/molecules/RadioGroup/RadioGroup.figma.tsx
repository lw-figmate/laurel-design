import figma from '@figma/code-connect';
import { RadioGroup } from './RadioGroup';

figma.connect(RadioGroup, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_RADIO_GROUP', {
  props: {
    label: figma.string('Label'),
    orientation: figma.enum('Orientation', { Horizontal: 'horizontal', Vertical: 'vertical' }),
  },
  example: (props) => (
    <RadioGroup name="group" {...props}>
      {figma.children('Radio*')}
    </RadioGroup>
  ),
});
