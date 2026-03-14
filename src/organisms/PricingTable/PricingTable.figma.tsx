import figma from '@figma/code-connect';
import { PricingTable } from './PricingTable';

figma.connect(PricingTable, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_PRICING_TABLE', {
  props: {},
  example: () => <PricingTable tiers={[]} features={[]} />,
});
