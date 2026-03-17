import figma from '@figma/code-connect';
import { Blockquote } from './Blockquote';

figma.connect(Blockquote, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=10:710', {
  props: {
    cite: figma.string('Cite'),
  },
  example: (props) => <Blockquote cite={props.cite}>Quote text goes here.</Blockquote>,
});
