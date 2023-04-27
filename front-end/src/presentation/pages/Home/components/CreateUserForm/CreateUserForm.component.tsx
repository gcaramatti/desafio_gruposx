import { InputText, Select, Loader } from '../../../../components';
import { ICreateUserFormPayload } from './CreateUserForm.types';
import { useCreateUserForm } from './useCreateUserForm';

export function CreateUserForm({
  companyList,
  createUserForm
}: ICreateUserFormPayload): JSX.Element {
  const { onBlur, isLoading, selectCompanyOptions } = useCreateUserForm({
    watch: createUserForm.watchCreateUserForm,
    setValue: createUserForm.setValueUserForm,
    companyList
  });

  return (
    <>
      <Loader isLoading={isLoading} />
      <InputText
        name={'name'}
        control={createUserForm.createUserFormControl}
        placeholder='Nome'
        errorMessage={
          createUserForm.createUserFormErrors?.name?.message as string
        }
      />

      <InputText
        name={'cpf'}
        control={createUserForm.createUserFormControl}
        placeholder='CPF'
        errorMessage={
          createUserForm.createUserFormErrors?.cpf?.message as string
        }
        mask='cpf'
      />

      <Select
        name='companyId'
        options={selectCompanyOptions}
        control={createUserForm.createUserFormControl}
        placeholder='Empresa'
      />

      <InputText
        name={'email'}
        control={createUserForm.createUserFormControl}
        placeholder='E-mail'
        errorMessage={
          createUserForm.createUserFormErrors?.email?.message as string
        }
      />

      <InputText
        name={'password'}
        control={createUserForm.createUserFormControl}
        placeholder='Senha'
        errorMessage={
          createUserForm.createUserFormErrors?.password?.message as string
        }
        type='password'
      />

      <InputText
        name={'phoneNumber'}
        control={createUserForm.createUserFormControl}
        placeholder='Telefone + DDD'
        errorMessage={
          createUserForm.createUserFormErrors?.phoneNumber?.message as string
        }
        mask='phone'
      />

      <InputText
        name={'postalCode'}
        control={createUserForm.createUserFormControl}
        placeholder='CEP'
        errorMessage={
          createUserForm.createUserFormErrors?.postalCode?.message as string
        }
        mask='cep'
        onBlur={onBlur}
      />

      <InputText
        name={'state'}
        control={createUserForm.createUserFormControl}
        placeholder='Estado'
        errorMessage={
          createUserForm.createUserFormErrors?.state?.message as string
        }
      />

      <InputText
        name={'street'}
        control={createUserForm.createUserFormControl}
        placeholder='Rua'
        errorMessage={
          createUserForm.createUserFormErrors?.street?.message as string
        }
      />

      <InputText
        name={'neighborhood'}
        control={createUserForm.createUserFormControl}
        placeholder='Bairro'
        errorMessage={
          createUserForm.createUserFormErrors?.neighborhood?.message as string
        }
      />

      <InputText
        name={'number'}
        control={createUserForm.createUserFormControl}
        placeholder='Número'
        errorMessage={
          createUserForm.createUserFormErrors?.number?.message as string
        }
      />
    </>
  );
}
