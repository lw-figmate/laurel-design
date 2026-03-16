import figma from '@figma/code-connect';
import { Sheet } from './Sheet';

figma.connect(Sheet, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=13:1703', {
  props: {},
  example: () => (
    <Sheet open onClose={() => {}} title="Sheet Title">
      <p>Sheet content</p>
    </Sheet>
  ),
});
