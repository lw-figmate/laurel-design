import figma from '@figma/code-connect';
import { FilterPanel } from './FilterPanel';

figma.connect(FilterPanel, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=26:4069', {
  props: {},
  example: () => (
    <FilterPanel
      title="Filters"
      sections={[{ title: 'Category', content: null }]}
    />
  ),
});
