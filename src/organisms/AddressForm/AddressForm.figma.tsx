import figma from '@figma/code-connect';
import { AddressForm } from './AddressForm';

figma.connect(AddressForm, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=25:3655', {
  props: {
    submitLabel: figma.string('SubmitLabel'),
    loading: figma.boolean('Loading'),
  },
  example: ({ submitLabel, loading }) => (
    <AddressForm
      onSubmit={(values) => {}}
      submitLabel={submitLabel}
      loading={loading}
    />
  ),
});
