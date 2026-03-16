import figma from '@figma/code-connect';
import { RadioGroup } from './RadioGroup';

figma.connect(RadioGroup, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1148', {
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
