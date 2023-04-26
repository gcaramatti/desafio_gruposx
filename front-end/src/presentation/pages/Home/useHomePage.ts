import { useState } from 'react';
import { HomePageModalType } from './HomePage.types';
import { useMutation, useQuery } from 'react-query';
import { getAllCompaniesQuery } from '../../../data/queries/company/company.queries';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateCompanyFormSchema } from './components/CreateCompanyForm/CreateCompanyFormSchema';
import { useForm } from 'react-hook-form';
import { ICompanyFormType } from '../../../data/services/company/companyService.types';
import { IUserFormType } from '../../../data/services/auth/userService.types';
import { createCompanyMutation } from '../../../data/queries/company/company.mutations';

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
    formState: { errors: createUserFormErrors }
  } = useForm<IUserFormType>({
    //resolver: yupResolver(createUserFormSchema)
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

  const mutation = useMutation(
    createCompanyMutation.key,
    async (payload: ICompanyFormType) => {
      return await createCompanyMutation.mutation(payload);
    },
    {
      onSuccess: () => {
        refetch();
        setModalOpen('closed');
        toast.success('Empresa criada com sucesso!');
      },
      onError: () => {
        toast.error('Erro ao criar empresa');
      }
    }
  );

  function createCompanyFormSubmit() {
    return createCompanyFormHandleSubmit(data => {
      mutation.mutate(data);
      resetCreateCompanyForm();
    });
  }

  function createUserFormSubmit() {
    return createUserHandleSubmit(data => {
      console.log(data);
      resetCreateUserForm();
    });
  }

  return {
    modalOpen,
    setModalOpen,
    allCompanies,
    isLoading: isLoading ?? mutation.isLoading,
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
      createUserFormSubmit
    }
  };
}
