import figma from '@figma/code-connect';
import { DatePicker } from './DatePicker';

figma.connect(DatePicker, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_DATE_PICKER', {
  props: {
    disabled: figma.boolean('Disabled'),
    placeholder: figma.string('Placeholder'),
  },
  example: (props) => <DatePicker {...props} />,
});
