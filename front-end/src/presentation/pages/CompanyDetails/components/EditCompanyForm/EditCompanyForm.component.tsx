import { RiEditLine } from 'react-icons/ri';
import { Button, InputText } from '../../../../components';
import { ActionButtonsWrapper, CompanyData } from './EditCompanyForm.styles';
import { useEditCompanyForm } from './useEditCompanyForm';
import { IEditCompanyFormPayload } from './EditCompanyForm.types';

export function EditCompanyForm({
  companyData,
  disabled,
  setDisabled
}: IEditCompanyFormPayload): JSX.Element {
  const { control, onSubmitForm } = useEditCompanyForm({
    companyData,
    setDisabled
  });

  return (
    <CompanyData>
      <Button
        icon={<RiEditLine />}
        type='button'
        onClick={() => setDisabled(!disabled)}
      >
        Editar empresa
      </Button>

      <h3>{`Empresa: ${companyData?.socialName}`}</h3>

      <form onSubmit={onSubmitForm()}>
        <InputText
          name='socialName'
          control={control}
          placeholder='Razão Social'
          disabled={disabled}
        />

        <InputText
          name='cnpj'
          control={control}
          placeholder='CNPJ'
          disabled={disabled}
          mask='cnpj'
        />

        <InputText
          name='email'
          control={control}
          placeholder='E-mail'
          disabled={disabled}
        />

        <InputText
          name='phoneNumber'
          control={control}
          placeholder='Telefone + DDD'
          disabled={disabled}
          mask='phone'
        />

        <InputText
          name='postalCode'
          control={control}
          placeholder='Cep'
          disabled={disabled}
          mask='cep'
        />

        <InputText
          name='street'
          control={control}
          placeholder='Rua'
          disabled={disabled}
        />

        <InputText
          name='number'
          control={control}
          placeholder='Número'
          disabled={disabled}
        />

        <InputText
          name='neighborhood'
          control={control}
          placeholder='Bairro'
          disabled={disabled}
        />

        <InputText
          name='state'
          control={control}
          placeholder='Estado'
          disabled={disabled}
        />

        {!disabled && (
          <ActionButtonsWrapper>
            <Button type='submit'>Salvar</Button>
            <Button
              type='button'
              onClick={() => setDisabled(true)}
              customButton={{ backgroundColor: 'danger', color: 'white' }}
            >
              Cancelar
            </Button>
          </ActionButtonsWrapper>
        )}
      </form>
    </CompanyData>
  );
}
