import { useDispatch, useSelector } from 'react-redux';

import { type AppDispatchType, type RootStateType } from '../store';

import { authenticate, logout } from './auth.slice';

import { type IAuthUserSlice, type IUseAuthUser } from './authSlice.types';

export function useAuth(): IUseAuthUser {
  const dispatch = useDispatch<AppDispatchType>();
  const { user, company, isLogged } = useSelector(
    (state: RootStateType) => state.authReducer
  );

  return {
    authenticate: (payload: IAuthUserSlice) => dispatch(authenticate(payload)),
    logout: () => dispatch(logout()),
    user,
    company,
    isLogged
  };
}
