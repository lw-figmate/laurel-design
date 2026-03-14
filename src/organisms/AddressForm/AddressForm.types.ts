import type { ComponentPropsWithRef } from 'react';

export interface AddressFormValues {
  /** Street address line 1 */
  street1: string;
  /** Street address line 2 */
  street2?: string;
  /** City */
  city: string;
  /** State/province */
  state: string;
  /** ZIP/postal code */
  zip: string;
  /** Country */
  country: string;
}

export interface AddressFormProps extends Omit<ComponentPropsWithRef<'form'>, 'onSubmit'> {
  /** Initial form values */
  defaultValues?: Partial<AddressFormValues>;
  /** Called on form submit */
  onSubmit: (values: AddressFormValues) => void;
  /** Called on cancel */
  onCancel?: () => void;
  /** Submit button label (default: 'Save address') */
  submitLabel?: string;
  /** Country options */
  countries?: { label: string; value: string }[];
  /** Whether the form is submitting */
  loading?: boolean;
}
