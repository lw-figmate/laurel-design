import figma from '@figma/code-connect';
import { CardGrid } from './CardGrid';

figma.connect(CardGrid, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_CARD_GRID', {
  props: {},
  example: () => <CardGrid>{figma.children('Card*')}</CardGrid>,
});
