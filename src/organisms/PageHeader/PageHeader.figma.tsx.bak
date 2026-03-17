import figma from '@figma/code-connect';
import { PageHeader } from './PageHeader';

figma.connect(PageHeader, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_PAGE_HEADER', {
  props: {
    title: figma.string('Title'),
    description: figma.string('Description'),
  },
  example: ({ title, description }) => <PageHeader title={title} description={description} />,
});
