import figma from '@figma/code-connect';
import { Header } from './Header';

figma.connect(Header, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=27:4289', {
  props: {
    sticky: figma.boolean('Sticky'),
  },
  example: (props) => (
    <Header logo={<strong>Logo</strong>} {...props}>
      {figma.children('*')}
    </Header>
  ),
});
