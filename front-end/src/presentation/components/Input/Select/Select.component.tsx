import ReactSelect from 'react-select';
import { ISelectOption, ISelectProps } from './SelectComponent.types';
import { Controller } from 'react-hook-form';

export function Select({
  control,
  options,
  name,
  disabled = false
}: ISelectProps): JSX.Element {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <ReactSelect
          name='companyId'
          options={options}
          isDisabled={disabled}
          onChange={newValue => {
            const typedNewValue = newValue as ISelectOption;
            onChange(typedNewValue?.value ? typedNewValue.value : null);
          }}
          value={
            options.find(option => option.value === (value as string)) ?? null
          }
          classNamePrefix='react-select'
          placeholder='Empresa'
        />
      )}
    />
  );
}
