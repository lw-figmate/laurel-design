import figma from '@figma/code-connect';
import { Collapsible } from './Collapsible';

figma.connect(Collapsible, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_COLLAPSIBLE', {
  props: {
    trigger: figma.string('Trigger'),
  },
  example: (props) => <Collapsible {...props}>Collapsible content.</Collapsible>,
});
