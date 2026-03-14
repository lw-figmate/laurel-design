import figma from '@figma/code-connect';
import { Link } from './Link';

figma.connect(Link, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_LINK', {
  props: {
    variant: figma.enum('Variant', {
      Default: 'default',
      Subtle: 'subtle',
    }),
    disabled: figma.boolean('Disabled'),
    children: figma.string('Text'),
  },
  example: (props) => <Link href="#" {...props} />,
});
