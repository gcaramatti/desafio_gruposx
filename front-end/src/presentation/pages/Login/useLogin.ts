import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { authenticateUserMutation } from '../../../data/queries/user/user.mutations';
import { toast } from 'react-toastify';
import { IAuthServicePayload } from '../../../data/services/auth/userService.types';
import { getAuthenticatedUserQuery } from '../../../data/queries/user/user.queries';
import { useState } from 'react';
import { useAuth } from '../../../data/store/slices/useAuth';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from './LoginPage.schema';

export function useLogin(): any {
  const navigation = useNavigate();
  const [enabled, setEnabled] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(LoginFormSchema)
  });
  const { authenticate } = useAuth();

  const { isLoading } = useQuery(
    getAuthenticatedUserQuery.key,
    getAuthenticatedUserQuery.query,
    {
      onSuccess: data => {
        authenticate({
          user: data.user,
          company: data.company,
          isLogged: true
        });

        navigation('/');
      },
      onError: () => {
        toast.error('Erro ao logar');
      },
      enabled: enabled
    }
  );

  const mutation = useMutation(
    authenticateUserMutation.key,
    async (payload: IAuthServicePayload) => {
      return await authenticateUserMutation.mutation(payload);
    },
    {
      onSuccess: accessToken => {
        localStorage.setItem('accessToken', accessToken);
        setEnabled(true);
      },
      onError: () => {
        toast.error('Usuário ou senha inválidos');
      }
    }
  );

  function onSubmit(data: IAuthServicePayload): void {
    if (data) {
      mutation.mutate(data);
    }
  }

  return {
    handleSubmit,
    control,
    onSubmit,
    isLoading: mutation.isLoading ?? isLoading,
    errors
  };
}
