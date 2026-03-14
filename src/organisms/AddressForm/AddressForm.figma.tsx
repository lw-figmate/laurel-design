import figma from '@figma/code-connect';
import { AddressForm } from './AddressForm';

figma.connect(AddressForm, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=TODO_ADDRESS_FORM', {
  props: {},
  example: () => <AddressForm onSubmit={() => {}} />,
});
