import figma from '@figma/code-connect';
import { Footer } from './Footer';

figma.connect(Footer, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_FOOTER', {
  props: {},
  example: () => <Footer copyright="© 2026 Acme" columns={[]} />,
});
