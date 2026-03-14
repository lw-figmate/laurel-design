import figma from '@figma/code-connect';
import { FormField } from './FormField';

figma.connect(FormField, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_FORMFIELD', {
  props: {
    label: figma.string('Label'),
    helperText: figma.string('Helper Text'),
    errorMessage: figma.string('Error Message'),
    required: figma.boolean('Required'),
    disabled: figma.boolean('Disabled'),
    inputSize: figma.enum('Size', {
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
    }),
  },
  example: (props) => <FormField {...props} />,
});
