import figma from '@figma/code-connect';
import { PricingPage } from './PricingPage';

figma.connect(PricingPage, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_PRICING_PAGE', {
  props: {},
  example: () => (
    <PricingPage
      tiers={[
        { id: 'free', name: 'Free', price: '$0/mo' },
        { id: 'pro', name: 'Pro', price: '$29/mo' },
      ]}
    />
  ),
});
