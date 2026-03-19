import figma from '@figma/code-connect';
import { Code } from './Code';

figma.connect(Code, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:709', {
  props: {
    size: figma.enum('Size', {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }),
    block: figma.enum('Display', {
      Block: true,
      Inline: false,
    }),
    children: figma.string('Content'),
  },
  example: (props) => <Code {...props} />,
});
