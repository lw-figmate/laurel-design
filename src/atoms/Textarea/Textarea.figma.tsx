import figma from '@figma/code-connect';
import { Textarea } from './Textarea';

figma.connect(Textarea, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_TEXTAREA', {
  props: {
    textareaSize: figma.enum('Size', {
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
    }),
    error: figma.boolean('Error'),
    disabled: figma.boolean('Disabled'),
    placeholder: figma.string('Placeholder'),
  },
  example: (props) => <Textarea {...props} />,
});
