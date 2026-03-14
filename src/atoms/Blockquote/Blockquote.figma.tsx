import figma from '@figma/code-connect';
import { Blockquote } from './Blockquote';

figma.connect(Blockquote, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_BLOCKQUOTE', {
  props: {},
  example: () => <Blockquote>Quote text goes here.</Blockquote>,
});
