import figma from '@figma/code-connect';
import { Footer } from './Footer';

figma.connect(Footer, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=26:4229', {
  props: {},
  example: () => (
    <Footer
      copyright="© 2024 Company"
      columns={[
        { title: 'Product', links: [{ label: 'Features', href: '#' }, { label: 'Pricing', href: '#' }] },
        { title: 'Company', links: [{ label: 'About', href: '#' }, { label: 'Blog', href: '#' }] },
      ]}
    />
  ),
});
