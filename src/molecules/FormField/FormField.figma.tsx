import figma from '@figma/code-connect';
import { FormField } from './FormField';

figma.connect(FormField, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1076', {
  props: {
    helperText: figma.string('Helper Text'),
    errorMessage: figma.string('Error Message'),
  },
  example: (props) => <FormField label="Label" {...props} />,
});
