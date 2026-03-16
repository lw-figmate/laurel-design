import figma from '@figma/code-connect';
import { CardGrid } from './CardGrid';

figma.connect(CardGrid, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=25:3692', {
  props: {
    columns: figma.string('Columns'),
    gap: figma.string('Gap'),
  },
  example: ({ columns, gap }) => (
    <CardGrid
      minCardWidth={columns === '3' ? '280px' : `${Math.floor(960 / Number(columns))}px`}
      gap={`${gap}px`}
    >
      {figma.children('Card*')}
    </CardGrid>
  ),
});
