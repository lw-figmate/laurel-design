import figma from '@figma/code-connect';
import { DatePicker } from './DatePicker';

figma.connect(DatePicker, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=13:1815', {
  props: {
    disabled: figma.boolean('Disabled'),
    placeholder: figma.string('Placeholder'),
  },
  example: (props) => <DatePicker {...props} />,
});
