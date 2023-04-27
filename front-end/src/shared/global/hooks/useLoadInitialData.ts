import { useQuery } from 'react-query';
import { getAuthenticatedUserQuery } from '../../../data/queries/user/user.queries';
import { authenticate } from '../../../data/store/slices/auth.slice';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../../data/store/slices/useAuth';
import { useEffect, useState } from 'react';

export function useLoadInitialData() {
  const [enabled, setEnabled] = useState(false);
  const navigation = useNavigate();
  const location = useLocation();

  const accessToken = localStorage.getItem('accessToken');
  const { isLogged } = useAuth();

  useEffect(() => {
    if (accessToken && !isLogged) {
      setEnabled(true);
    }
  }, [accessToken, isLogged]);

  const { isLoading } = useQuery(
    'getAuthenticatedUserWhenAccessToken',
    getAuthenticatedUserQuery.query,
    {
      onSuccess: data => {
        authenticate({
          user: data.user,
          company: data.company,
          isLogged: true
        });

        if (location.pathname === '/login') navigation('/');
      },
      onError: () => {
        toast.error('Erro ao logar');
      },
      enabled: enabled
    }
  );

  return { isLoading };
}
