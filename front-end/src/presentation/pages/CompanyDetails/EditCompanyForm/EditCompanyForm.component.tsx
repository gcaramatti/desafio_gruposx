import { RiEditLine } from 'react-icons/ri';
import { Button, InputText } from '../../../components';
import { ActionButtons } from '../CompanyDetailsPage.styles';
import { CompanyData } from './EditCompanyFormComponent.styles';
import { useEditCompanyForm } from './useEditCompanyForm';
import { IEditCompanyFormPayload } from './EditCompanyFormComponent.types';

export function EditCompanyForm({
  companyData,
  disabled,
  setDisabled
}: IEditCompanyFormPayload): JSX.Element {
  const { control } = useEditCompanyForm();

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

      <form>
        <InputText
          name='socialName'
          defaultValue={companyData?.socialName}
          control={control}
          placeholder='Razão Social'
          disabled={disabled}
        />

        <InputText
          name='CNPJ'
          defaultValue={companyData?.cnpj}
          control={control}
          placeholder='CNPJ'
          disabled={disabled}
          mask='cnpj'
        />

        <InputText
          name='email'
          defaultValue={companyData?.email}
          control={control}
          placeholder='E-mail'
          disabled={disabled}
        />

        <InputText
          name='phoneNumber'
          defaultValue={companyData?.phoneNumber}
          control={control}
          placeholder='Telefone + DDD'
          disabled={disabled}
          mask='phone'
        />

        <InputText
          name='postalCode'
          defaultValue={companyData?.postalCode}
          control={control}
          placeholder='Cep'
          disabled={disabled}
          mask='cep'
        />

        <InputText
          name='street'
          defaultValue={companyData?.street}
          control={control}
          placeholder='Rua'
          disabled={disabled}
        />

        <InputText
          name='number'
          defaultValue={companyData?.number}
          control={control}
          placeholder='Número'
          disabled={disabled}
        />

        <InputText
          name='neighborhood'
          defaultValue={companyData?.neighborhood}
          control={control}
          placeholder='Bairro'
          disabled={disabled}
        />

        <InputText
          name='state'
          defaultValue={companyData?.state}
          control={control}
          placeholder='Estado'
          disabled={disabled}
        />

        {!disabled && (
          <div>
            <Button type='button'>Salvar</Button>
            <Button
              type='button'
              onClick={() => setDisabled(true)}
              customButton={{ backgroundColor: 'danger', color: 'white' }}
            >
              Cancelar
            </Button>
          </div>
        )}
      </form>
    </CompanyData>
  );
}
