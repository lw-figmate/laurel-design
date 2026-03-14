import { forwardRef, useState, useCallback, Children, isValidElement, cloneElement } from 'react';
import { Text } from '../../atoms/Text';
import type { CheckboxGroupProps } from './CheckboxGroup.types';

const CheckboxGroup = forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  ({ label, value: controlledValue, defaultValue = [], onValueChange, orientation = 'vertical', error, children, className = '', ...rest }, ref) => {
    const [internalValue, setInternalValue] = useState<string[]>(defaultValue);
    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;

    const handleChange = useCallback(
      (itemValue: string, checked: boolean) => {
        const next = checked ? [...currentValue, itemValue] : currentValue.filter((v) => v !== itemValue);
        if (!isControlled) setInternalValue(next);
        onValueChange?.(next);
      },
      [currentValue, isControlled, onValueChange],
    );

    const checkboxes = Children.map(children, (child) => {
      if (isValidElement<{ checked?: boolean; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; value?: string }>(child)) {
        const itemValue = child.props.value ?? '';
        return cloneElement(child, {
          checked: currentValue.includes(itemValue),
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(itemValue, e.target.checked);
            child.props.onChange?.(e);
          },
        });
      }
      return child;
    });

    return (
      <fieldset ref={ref} className={['font-[family-name:var(--laurel-font-sans)]', className].filter(Boolean).join(' ')} {...rest}>
        {label && (
          <legend className="mb-[var(--laurel-space-2)]">
            <Text as="span" size="sm" weight="medium">{label}</Text>
          </legend>
        )}
        <div className={['flex gap-[var(--laurel-space-3)]', orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap'].join(' ')}>
          {checkboxes}
        </div>
        {error && (
          <Text as="span" size="xs" className="mt-[var(--laurel-space-1)] text-[var(--laurel-text-error)]" role="alert">
            {error}
          </Text>
        )}
      </fieldset>
    );
  },
);

CheckboxGroup.displayName = 'CheckboxGroup';

export { CheckboxGroup };
