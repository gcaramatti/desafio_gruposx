import { useState } from 'react';
import { HomePageModalType } from './HomePage.types';
import { useMutation, useQuery } from 'react-query';
import { getAllCompaniesQuery } from '../../../data/queries/company/company.queries';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateCompanyFormSchema } from './components/CreateCompanyForm/CreateCompanyFormSchema';
import { useForm } from 'react-hook-form';
import { ICompanyFormType } from '../../../data/services/company/companyService.types';
import { IUserForm } from '../../../data/services/auth/userService.types';
import {
  createCompanyMutation,
  deleteCompanyMutation
} from '../../../data/queries/company/company.mutations';
import { CreateUserFormSchema } from './components/CreateUserForm/CreateUserFormSchema';
import { createUserMutation } from '../../../data/queries/user/user.mutations';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export function useHomePage() {
  const [modalOpen, setModalOpen] = useState<HomePageModalType>('closed');
  const {
    handleSubmit: createCompanyFormHandleSubmit,
    control: createCompanyFormControl,
    reset: resetCreateCompanyForm,
    watch: watchCreateCompanyForm,
    clearErrors: clearErrorsCompanyForm,
    setValue: setValueCompanyForm,
    formState: { errors: createCompanyFormErrors }
  } = useForm<ICompanyFormType>({
    resolver: yupResolver(CreateCompanyFormSchema)
  });

  const {
    handleSubmit: createUserHandleSubmit,
    control: createUserFormControl,
    reset: resetCreateUserForm,
    setValue: setValueUserForm,
    watch: watchCreateUserForm,
    clearErrors: clearErrorsUserForm,
    formState: { errors: createUserFormErrors }
  } = useForm<IUserForm>({
    resolver: yupResolver(CreateUserFormSchema)
  });

  const {
    data: allCompanies,
    refetch,
    isLoading
  } = useQuery(getAllCompaniesQuery.key, getAllCompaniesQuery.query, {
    onError: () => {
      toast.error('Erro desconhecido');
    }
  });

  const useCreateCompanyMutation = useMutation(
    createCompanyMutation.key,
    async (payload: ICompanyFormType) => {
      return await createCompanyMutation.mutation(payload);
    },
    {
      onSuccess: () => {
        toast.success('Empresa criada com sucesso!');
        refetch();
        setModalOpen('closed');
      },
      onError: () => {
        toast.error('Erro ao criar empresa');
      }
    }
  );

  const useCreateUserMutation = useMutation(
    createUserMutation.key,
    async (payload: IUserForm) => {
      return await createUserMutation.mutation(payload);
    },
    {
      onSuccess: () => {
        toast.success('Usuário criado com sucesso!');
        setModalOpen('closed');
      },
      onError: () => {
        toast.error('Erro ao criar usuário');
      }
    }
  );

  const deleteCompanyUseMutation = useMutation(
    deleteCompanyMutation.key,
    async (companyId: number) => {
      return await deleteCompanyMutation.mutation(companyId);
    },
    {
      onSuccess: () => {
        refetch();
        toast.success('Empresa apagada com sucesso!');
      },
      onError: () => {
        toast.error('Erro ao apagar empresa');
      }
    }
  );

  function onClickDeleteCompany(companyId: number) {
    return () => {
      confirmAlert({
        title: 'Apagar empresa?',
        message:
          'Ao apagar a empresa, você também apaga todos os funcionários cadastrados nela!',
        closeOnClickOutside: true,
        buttons: [
          {
            label: 'Confirmar',
            className: 'confirm_delete',
            onClick: () => deleteCompanyUseMutation.mutate(companyId)
          },
          {
            className: 'cancel_delete',
            label: 'Cancelar'
          }
        ]
      });
    };
  }

  function createCompanyFormSubmit() {
    return createCompanyFormHandleSubmit(data => {
      useCreateCompanyMutation.mutate(data);
      resetCreateCompanyForm();
    });
  }

  function createUserFormSubmit() {
    return createUserHandleSubmit(data => {
      useCreateUserMutation.mutate(data);
      resetCreateUserForm();
    });
  }

  return {
    modalOpen,
    setModalOpen,
    allCompanies,
    isLoading:
      isLoading ??
      useCreateCompanyMutation.isLoading ??
      useCreateUserMutation.isLoading ??
      deleteCompanyUseMutation.isLoading,
    createCompanyForm: {
      createCompanyFormControl,
      createCompanyFormErrors,
      createCompanyFormSubmit,
      watchCreateCompanyForm,
      clearErrorsCompanyForm,
      setValueCompanyForm
    },
    createUserForm: {
      createUserFormControl,
      createUserFormErrors,
      createUserFormSubmit,
      setValueUserForm,
      watchCreateUserForm,
      clearErrorsUserForm
    },
    onClickDeleteCompany
  };
}
