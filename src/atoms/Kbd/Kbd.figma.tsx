import figma from '@figma/code-connect';
import { Kbd } from './Kbd';

figma.connect(Kbd, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_KBD', {
  props: {},
  example: () => <Kbd>⌘K</Kbd>,
});
