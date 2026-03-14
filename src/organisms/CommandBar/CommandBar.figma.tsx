import figma from '@figma/code-connect';
import { CommandBar } from './CommandBar';

figma.connect(CommandBar, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_COMMAND_BAR', {
  props: {
    placeholder: figma.string('Placeholder'),
  },
  example: ({ placeholder }) => (
    <CommandBar commands={[]} onSelect={() => {}} placeholder={placeholder} />
  ),
});
