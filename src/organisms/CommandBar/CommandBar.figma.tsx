import figma from '@figma/code-connect';
import { CommandBar } from './CommandBar';

figma.connect(CommandBar, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=25:3789', {
  props: {},
  example: () => (
    <CommandBar commands={[]} onSelect={() => {}} />
  ),
});
