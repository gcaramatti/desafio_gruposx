import { createSlice } from '@reduxjs/toolkit';

import { type IAuthUserSlice } from './authSlice.types';
import { ICompany, IUser } from '../../services/auth/userService.types';

const initialState: IAuthUserSlice = {
  user: {} as IUser,
  company: {} as ICompany,
  isLogged: false
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state, action: { payload: IAuthUserSlice }) => {
      state.isLogged = action.payload.isLogged;
      state.user = action.payload.user;
      state.company = action.payload.company;
    },

    logout: state => {
      state.isLogged = false;
      state.user = {
        id: 0,
        cpf: '',
        name: '',
        email: '',
        phoneNumber: '',
        postalCode: '',
        street: '',
        number: '',
        neighborhood: '',
        state: '',
        companyId: 0
      };
      localStorage.removeItem('accessToken');
    }
  }
});

export const { authenticate, logout } = slice.actions;

export default slice.reducer;
