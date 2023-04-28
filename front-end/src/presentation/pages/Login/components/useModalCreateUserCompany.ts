import { useForm } from 'react-hook-form';
import { IUserForm } from '../../../../data/services/auth/userService.types';
import { useGetAddressByPostalCode } from '../../../../shared/global/hooks/useGetAddressByPostalCode';
import {
  createUserMutation,
  createUserOnboardingMutation
} from '../../../../data/queries/user/user.mutations';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateUserFormSchema } from '../../Home/components/CreateUserForm/CreateUserForm.schema';

export function useModalCreateUserCompany(
  setModalOpen: React.Dispatch<React.SetStateAction<'user' | 'closed'>>
) {
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IUserForm>({
    resolver: yupResolver(CreateUserFormSchema)
  });

  const postalCode = watch('postalCode', '');

  const { data, isLoading: isLoadingCepRequest } = useGetAddressByPostalCode({
    postalCode: postalCode
  });

  function onBlur() {
    if (data) {
      setValue('state', data.state);
      setValue('street', data.street);
      setValue('neighborhood', data.neighborhood);
    }
  }

  const selectCompanyOptions =
    localStorage.getItem('selectCompanyOptions') !== null
      ? JSON.parse(localStorage.getItem('selectCompanyOptions') as string)
      : [{ label: 'Sem empresa', value: 1 }];

  const createUserUseMutation = useMutation(
    createUserMutation.key,
    async (payload: IUserForm) => {
      return await createUserOnboardingMutation.mutation(payload);
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

  function onSubmit() {
    return handleSubmit(data => {
      createUserUseMutation.mutate(data);
      reset();
    });
  }

  return {
    selectCompanyOptions,
    createUserForm: { control, errors },
    isLoading: isLoadingCepRequest ?? createUserUseMutation.isLoading,
    onBlur,
    onSubmit
  };
}
