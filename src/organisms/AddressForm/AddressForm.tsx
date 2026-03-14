import { forwardRef, useState, useId } from 'react';
import { Input } from '../../atoms/Input';
import { Select } from '../../atoms/Select';
import { Button } from '../../atoms/Button';
import { Label } from '../../atoms/Label';
import { FormField } from '../../molecules/FormField';
import type { AddressFormProps, AddressFormValues } from './AddressForm.types';

const defaultCountries = [
  { label: 'United States', value: 'US' },
  { label: 'Canada', value: 'CA' },
  { label: 'United Kingdom', value: 'GB' },
  { label: 'Australia', value: 'AU' },
  { label: 'Germany', value: 'DE' },
  { label: 'France', value: 'FR' },
];

const emptyValues: AddressFormValues = {
  street1: '',
  street2: '',
  city: '',
  state: '',
  zip: '',
  country: '',
};

const AddressForm = forwardRef<HTMLFormElement, AddressFormProps>(
  (
    {
      defaultValues,
      onSubmit,
      onCancel,
      submitLabel = 'Save address',
      countries = defaultCountries,
      loading,
      className = '',
      ...rest
    },
    ref,
  ) => {
    const [values, setValues] = useState<AddressFormValues>({ ...emptyValues, ...defaultValues });
    const countryId = useId();

    const update = (field: keyof AddressFormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(values);
    };

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={['font-[family-name:var(--laurel-font-sans)] space-y-[var(--laurel-space-4)]', className]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        <FormField label="Street address" value={values.street1} onChange={update('street1')} placeholder="123 Main St" required />

        <FormField label="Street address line 2" value={values.street2 ?? ''} onChange={update('street2')} placeholder="Apt, suite, etc." />

        <div className="grid grid-cols-2 gap-[var(--laurel-space-4)]">
          <FormField label="City" value={values.city} onChange={update('city')} required />
          <FormField label="State / Province" value={values.state} onChange={update('state')} required />
        </div>

        <div className="grid grid-cols-2 gap-[var(--laurel-space-4)]">
          <FormField label="ZIP / Postal code" value={values.zip} onChange={update('zip')} required />
          <div className="flex flex-col gap-[var(--laurel-space-1-5)]">
            <Label htmlFor={countryId}>Country</Label>
            <Select id={countryId} value={values.country} onChange={update('country')} required placeholder="Select country">
              {countries.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className="flex items-center justify-end gap-[var(--laurel-space-3)] pt-[var(--laurel-space-4)]">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button type="submit" disabled={loading}>
            {loading ? 'Saving...' : submitLabel}
          </Button>
        </div>
      </form>
    );
  },
);

AddressForm.displayName = 'AddressForm';

export { AddressForm };
