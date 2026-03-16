import figma from '@figma/code-connect';
import { PinInput } from './PinInput';

figma.connect(PinInput, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1392', {
  props: {
    size: figma.enum('Size', { sm: 'sm', md: 'md', lg: 'lg' }),
    mask: figma.boolean('Mask'),
    disabled: figma.boolean('Disabled'),
  },
  example: (props) => <PinInput {...props} />,
});
