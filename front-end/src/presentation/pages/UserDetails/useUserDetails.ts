import { useMutation, useQuery } from 'react-query';
import { getUserDetailsQuery } from '../../../data/queries/user/user.queries';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  IUpdateUserPayload,
  IUserForm
} from '../../../data/services/auth/userService.types';
import { updateUserMutation } from '../../../data/queries/user/user.mutations';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateUserFormSchema } from '../Home/components/CreateUserForm/CreateUserForm.schema';

export function useUserDetails() {
  const [disabled, setDisabled] = useState(true);
  const { control, setValue, handleSubmit } = useForm<IUserForm>({
    resolver: yupResolver(CreateUserFormSchema)
  });
  const { userId } = useParams();
  const formattedId = userId ? parseInt(userId) : 0;

  const { data } = useQuery(
    getUserDetailsQuery.key,
    async () => {
      return getUserDetailsQuery.query(formattedId);
    },
    {
      onError: () => {
        toast.error('Erro ao carregar dados');
      }
    }
  );

  useEffect(() => {
    setValue('name', data?.name as string);
    setValue('cpf', data?.cpf as string);
    setValue('email', data?.email as string);
    setValue('phoneNumber', data?.phoneNumber as string);
    setValue('password', data?.password as string);
    setValue('postalCode', data?.postalCode as string);
    setValue('street', data?.street as string);
    setValue('state', data?.state as string);
    setValue('neighborhood', data?.neighborhood as string);
    setValue('number', data?.number as string);
    setValue('companyId', String(data?.companyId) as string);
  }, [data]);

  const updateUserUseMutation = useMutation(
    updateUserMutation.key,
    async (payload: IUpdateUserPayload) => {
      return await updateUserMutation.mutation(payload);
    },
    {
      onSuccess: () => {
        toast.success('Usuário Atualizado com sucesso!');
        setDisabled(true);
      },
      onError: () => {
        toast.error('Erro ao atualizar usuário');
      }
    }
  );

  function onSubmit() {
    return handleSubmit(data => {
      updateUserUseMutation.mutate({
        data: data,
        id: formattedId
      });
    });
  }

  return {
    data,
    disabled,
    setDisabled,
    editUserForm: {
      control,
      onSubmit,
      isLoading: updateUserUseMutation.isLoading
    }
  };
}
