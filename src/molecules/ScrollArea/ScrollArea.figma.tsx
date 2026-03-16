import figma from '@figma/code-connect';
import { ScrollArea } from './ScrollArea';

figma.connect(ScrollArea, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=13:1735', {
  props: {},
  example: () => (
    <ScrollArea maxHeight={300}>
      <p>Scrollable content</p>
    </ScrollArea>
  ),
});
