import figma from '@figma/code-connect';
import { CheckboxGroup } from './CheckboxGroup';

figma.connect(CheckboxGroup, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_CHECKBOX_GROUP', {
  props: {
    label: figma.string('Label'),
    orientation: figma.enum('Orientation', { Horizontal: 'horizontal', Vertical: 'vertical' }),
  },
  example: (props) => <CheckboxGroup {...props}>{figma.children('Checkbox*')}</CheckboxGroup>,
});
