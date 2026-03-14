import figma from '@figma/code-connect';
import { EmptyState } from './EmptyState';

figma.connect(EmptyState, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_EMPTYSTATE', {
  props: {
    title: figma.string('Title'),
    description: figma.string('Description'),
  },
  example: (props) => <EmptyState {...props} />,
});
