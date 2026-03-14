import figma from '@figma/code-connect';
import { FilterPanel } from './FilterPanel';

figma.connect(FilterPanel, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_FILTER_PANEL', {
  props: {},
  example: () => <FilterPanel sections={[{ title: 'Category', content: null }]} />,
});
