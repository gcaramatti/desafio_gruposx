import { useQuery } from 'react-query';
import { getUserDetailsQuery } from '../../../data/queries/user/user.queries';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  IUserDetailsForm,
  IUserForm
} from '../../../data/services/auth/userService.types';

export function useUserDetails() {
  const [disabled, setDisabled] = useState(true);
  const { control, setValue } = useForm<IUserForm>();
  const { userId } = useParams();

  const { data } = useQuery(
    getUserDetailsQuery.key,
    async () => {
      return getUserDetailsQuery.query(userId ? parseInt(userId) : 0);
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
    setValue('postalCode', data?.postalCode as string);
    setValue('street', data?.street as string);
    setValue('state', data?.state as string);
    setValue('neighborhood', data?.neighborhood as string);
    setValue('number', data?.number as string);
    setValue('companyId', String(data?.companyId) as string);
  }, [data]);

  return { data, disabled, setDisabled, editUserForm: { control } };
}
