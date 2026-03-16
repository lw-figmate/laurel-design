import figma from '@figma/code-connect';
import { HoverCard } from './HoverCard';

figma.connect(HoverCard, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=13:1701', {
  props: {},
  example: () => (
    <HoverCard trigger={<span>Hover me</span>}>
      <p>Card content</p>
    </HoverCard>
  ),
});
