import figma from '@figma/code-connect';
import { ContextMenu } from './ContextMenu';

figma.connect(ContextMenu, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=13:1769', {
  props: {},
  example: () => (
    <ContextMenu items={[{ label: 'Copy' }, { label: 'Paste' }]}>
      <div>Right-click me</div>
    </ContextMenu>
  ),
});
