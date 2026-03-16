import figma from '@figma/code-connect';
import { AddressForm } from './AddressForm';

figma.connect(AddressForm, 'https://www.figma.com/design/Ni2hCq5zflPlamYJfpIV68/Laurelma-DS?node-id=25:3655', {
  props: {
    submitLabel: figma.string('SubmitLabel'),
    showCancel: figma.boolean('ShowCancel'),
    loading: figma.boolean('Loading'),
  },
  example: ({ submitLabel, showCancel, loading }) => (
    <AddressForm
      onSubmit={(values) => {}}
      onCancel={showCancel ? () => {} : undefined}
      submitLabel={submitLabel}
      loading={loading}
    />
  ),
});
