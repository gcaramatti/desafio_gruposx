import { useQuery } from 'react-query';
import { getAuthenticatedUserQuery } from '../../../data/queries/user/user.queries';
import { authenticate } from '../../../data/store/slices/auth.slice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../../data/store/slices/useAuth';
import { useEffect, useState } from 'react';

export function useLoadInitialData() {
  const [enabled, setEnabled] = useState(false);
  const navigation = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  const { isLogged } = useAuth();

  useEffect(() => {
    if (accessToken && !isLogged) {
      setEnabled(true);
    }
  }, [accessToken, isLogged]);

  const { isLoading } = useQuery(
    'anotherKey',
    getAuthenticatedUserQuery.query,
    {
      onSuccess: data => {
        authenticate({
          user: data.user,
          company: data.company,
          isLogged: true
        });

        navigation(-1);
      },
      onError: () => {
        toast.error('Erro ao logar');
      },
      enabled: enabled
    }
  );

  return { isLoading };
}
