import figma from '@figma/code-connect';
import { Label } from './Label';

figma.connect(Label, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_LABEL', {
  props: {
    required: figma.boolean('Required'),
    disabled: figma.boolean('Disabled'),
    children: figma.string('Text'),
  },
  example: (props) => <Label {...props} />,
});
