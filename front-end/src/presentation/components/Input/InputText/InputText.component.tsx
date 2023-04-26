import { Controller, FieldValues, Path, PathValue } from 'react-hook-form';
import {
  Container,
  ErrorMessage,
  StyledInput
} from './InputTextComponent.styles';
import { IInputProps } from './InputTextComponent.types';
import { Mask } from '../../../../shared/utils';

export function InputText<T extends FieldValues>({
  name,
  control,
  defaultValue = '',
  mask = undefined,
  type = 'text',
  placeholder = '',
  errorMessage = '',
  icon,
  onBlur
}: IInputProps<T>): JSX.Element {
  return (
    <>
      <Container icon={icon}>
        {icon && <span>{icon}</span>}

        <Controller
          name={name as Path<T>}
          control={control}
          defaultValue={defaultValue as PathValue<T, Path<T>>}
          render={({ field: { onChange, value } }) => (
            <StyledInput
              type={type}
              name={name}
              placeholder={placeholder}
              onChange={e => {
                onChange(Mask.apply(mask, e.target.value));
              }}
              value={value}
              onBlur={onBlur}
            />
          )}
        />

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Container>
    </>
  );
}
