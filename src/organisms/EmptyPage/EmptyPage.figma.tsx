import figma from '@figma/code-connect';
import { EmptyPage } from './EmptyPage';

figma.connect(EmptyPage, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=26:4051', {
  props: {
    title: figma.string('Title'),
    description: figma.string('Description'),
  },
  example: ({ title, description }) => <EmptyPage title={title} description={description} />,
});
