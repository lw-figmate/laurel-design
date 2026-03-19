import figma from '@figma/code-connect';
import { CardGrid } from './CardGrid';

figma.connect(CardGrid, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=25:3692', {
  props: {},
  example: () => (
    <CardGrid
      minCardWidth="280px"
    >
      {figma.children('Card*')}
    </CardGrid>
  ),
});
