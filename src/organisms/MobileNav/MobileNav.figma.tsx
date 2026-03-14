import figma from '@figma/code-connect';
import { MobileNav } from './MobileNav';

figma.connect(MobileNav, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_MOBILE_NAV', {
  props: {},
  example: () => (
    <MobileNav
      links={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
      ]}
    />
  ),
});
