import figma from '@figma/code-connect';
import { Blockquote } from './Blockquote';

figma.connect(Blockquote, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:710', {
  props: {
    size: figma.enum('Size', {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }),
    accent: figma.enum('Accent', {
      Default: 'default',
      Neutral: 'neutral',
      Primary: 'primary',
    }),
    cite: figma.string('Cite'),
  },
  example: (props) => <Blockquote {...props}>Quote text goes here.</Blockquote>,
});
