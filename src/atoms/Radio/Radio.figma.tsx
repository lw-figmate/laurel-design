import figma from '@figma/code-connect';
import { Radio } from './Radio';

figma.connect(Radio, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_RADIO', {
  props: {
    radioSize: figma.enum('Size', {
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
    }),
    disabled: figma.boolean('Disabled'),
  },
  example: (props) => <Radio {...props} />,
});
