import figma from '@figma/code-connect';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';

figma.connect(Breadcrumb, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:1013', {
  props: {
    separator: figma.string('Separator'),
  },
  example: (props) => (
    <Breadcrumb {...props}>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem>Current Page</BreadcrumbItem>
    </Breadcrumb>
  ),
});
