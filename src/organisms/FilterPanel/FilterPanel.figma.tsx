import figma from '@figma/code-connect';
import { FilterPanel } from './FilterPanel';

figma.connect(FilterPanel, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=26:4069', {
  props: {
    title: figma.string('Title'),
    clearLabel: figma.string('ClearLabel'),
  },
  example: ({ title, clearLabel }) => (
    <FilterPanel
      title={title}
      clearLabel={clearLabel}
      sections={[{ title: 'Category', content: null }]}
    />
  ),
});
