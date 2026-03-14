import { forwardRef, useState, useCallback, Children, isValidElement, cloneElement } from 'react';
import { Text } from '../../atoms/Text';
import type { RadioGroupProps } from './RadioGroup.types';

const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  ({ label, name, value: controlledValue, defaultValue, onValueChange, orientation = 'vertical', error, children, className = '', ...rest }, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : internalValue;

    const handleChange = useCallback(
      (val: string) => {
        if (!isControlled) setInternalValue(val);
        onValueChange?.(val);
      },
      [isControlled, onValueChange],
    );

    const radios = Children.map(children, (child) => {
      if (isValidElement<{ name?: string; checked?: boolean; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; value?: string }>(child)) {
        return cloneElement(child, {
          name,
          checked: child.props.value === currentValue,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(e.target.value);
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
          {radios}
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

RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };
