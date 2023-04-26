import { InputText, Loader } from '../../../../components';
import { ICreateCompanyForm } from './CreateCompanyForm.types';
import { useCreateCompanyForm } from './useCreateCompanyForm';

export function CreateCompanyForm({
  createCompanyForm
}: ICreateCompanyForm): JSX.Element {
  const { onBlur, isLoading } = useCreateCompanyForm({
    watch: createCompanyForm.watchCreateCompanyForm,
    setValue: createCompanyForm.setValueCompanyForm,
    clearErros: createCompanyForm.clearErrorsCompanyForm
  });

  return (
    <>
      <Loader isLoading={isLoading} />
      <InputText
        name={'socialName'}
        control={createCompanyForm.createCompanyFormControl}
        placeholder='Razão Social'
        errorMessage={
          createCompanyForm.createCompanyFormErrors?.socialName
            ?.message as string
        }
      />

      <InputText
        name={'cnpj'}
        control={createCompanyForm.createCompanyFormControl}
        placeholder='CNPJ'
        errorMessage={
          createCompanyForm.createCompanyFormErrors?.cnpj?.message as string
        }
        mask='cnpj'
      />

      <InputText
        name={'email'}
        control={createCompanyForm.createCompanyFormControl}
        placeholder='E-mail'
        errorMessage={
          createCompanyForm.createCompanyFormErrors?.email?.message as string
        }
      />

      <InputText
        name={'phoneNumber'}
        control={createCompanyForm.createCompanyFormControl}
        placeholder='Telefone + DDD'
        errorMessage={
          createCompanyForm.createCompanyFormErrors?.phoneNumber
            ?.message as string
        }
        mask='phone'
      />

      <InputText
        name={'postalCode'}
        control={createCompanyForm.createCompanyFormControl}
        placeholder='CEP'
        errorMessage={
          createCompanyForm.createCompanyFormErrors?.postalCode
            ?.message as string
        }
        mask='cep'
        onBlur={onBlur}
      />

      <InputText
        name={'state'}
        control={createCompanyForm.createCompanyFormControl}
        placeholder='Estado'
        errorMessage={
          createCompanyForm.createCompanyFormErrors?.state?.message as string
        }
      />

      <InputText
        name={'street'}
        control={createCompanyForm.createCompanyFormControl}
        placeholder='Rua'
        errorMessage={
          createCompanyForm.createCompanyFormErrors?.street?.message as string
        }
      />

      <InputText
        name={'neighborhood'}
        control={createCompanyForm.createCompanyFormControl}
        placeholder='Bairro'
        errorMessage={
          createCompanyForm.createCompanyFormErrors?.neighborhood
            ?.message as string
        }
      />

      <InputText
        name={'number'}
        control={createCompanyForm.createCompanyFormControl}
        placeholder='Número'
        errorMessage={
          createCompanyForm.createCompanyFormErrors?.number?.message as string
        }
      />
    </>
  );
}
