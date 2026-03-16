import figma from '@figma/code-connect';
import { CommandPalette } from './CommandPalette';

figma.connect(CommandPalette, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=13:1753', {
  props: {},
  example: () => (
    <CommandPalette
      open
      onClose={() => {}}
      commands={[{ id: '1', label: 'Search Files' }]}
      onSelect={() => {}}
    />
  ),
});
