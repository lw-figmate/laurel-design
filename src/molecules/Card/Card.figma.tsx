import figma from '@figma/code-connect';
import { Card, CardHeader, CardBody, CardFooter } from './Card';

figma.connect(Card, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=12:918', {
  props: {
    noPadding: figma.boolean('No Padding'),
  },
  example: (props) => (
    <Card {...props}>
      <CardHeader>Header</CardHeader>
      <CardBody>Body</CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  ),
});
