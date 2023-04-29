import { InputText, Loader, Modal, Select } from '../../../components';
import { IModalCreateUserCompany } from './ModalCreateUserCompany.types';
import { useModalCreateUserCompany } from './useModalCreateUserCompany';

export function ModalCreateUserCompany({
  isLoading,
  modal
}: IModalCreateUserCompany): JSX.Element {
  const { selectCompanyOptions, createUserForm, onBlur, onSubmit } =
    useModalCreateUserCompany(modal.setModalOpen);

  return (
    <Modal
      isOpen={modal.isOpen}
      onClose={modal.onClose}
      title={modal.title}
      onSubmit={onSubmit()}
    >
      <Loader isLoading={isLoading} />

      <InputText
        name={'name'}
        control={createUserForm.control}
        errorMessage={createUserForm.errors?.name?.message}
        placeholder='Nome'
      />

      <InputText
        name={'cpf'}
        control={createUserForm.control}
        errorMessage={createUserForm.errors?.cpf?.message}
        placeholder='CPF'
        mask='cpf'
      />

      <Select
        name='companyId'
        options={selectCompanyOptions}
        control={createUserForm.control}
        errorMessage={createUserForm.errors?.companyId?.message}
        placeholder='Empresa'
      />

      <InputText
        name={'email'}
        control={createUserForm.control}
        errorMessage={createUserForm.errors?.email?.message}
        placeholder='E-mail'
      />

      <InputText
        name={'password'}
        control={createUserForm.control}
        errorMessage={createUserForm.errors?.password?.message}
        placeholder='Senha'
        type='password'
      />

      <InputText
        name={'phoneNumber'}
        control={createUserForm.control}
        errorMessage={createUserForm.errors?.phoneNumber?.message}
        placeholder='Telefone + DDD'
        mask='phone'
      />

      <InputText
        name={'postalCode'}
        control={createUserForm.control}
        errorMessage={createUserForm.errors?.postalCode?.message}
        placeholder='CEP'
        mask='cep'
        onBlur={onBlur}
      />

      <InputText
        name={'state'}
        control={createUserForm.control}
        errorMessage={createUserForm.errors?.state?.message}
        placeholder='Estado'
      />

      <InputText
        name={'street'}
        control={createUserForm.control}
        errorMessage={createUserForm.errors?.street?.message}
        placeholder='Rua'
      />

      <InputText
        name={'neighborhood'}
        control={createUserForm.control}
        errorMessage={createUserForm.errors?.neighborhood?.message}
        placeholder='Bairro'
      />

      <InputText
        name={'number'}
        control={createUserForm.control}
        errorMessage={createUserForm.errors?.number?.message}
        placeholder='Número'
      />
    </Modal>
  );
}
