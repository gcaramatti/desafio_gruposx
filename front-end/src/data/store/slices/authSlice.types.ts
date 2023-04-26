import { IUser } from '../../services/auth/userService.types';

export interface IAuthUserSlice {
  user: IUser;
  company: any;
  isLogged: boolean;
}

export interface IUseAuthUser extends IAuthUserSlice {
  authenticate: (payload: IAuthUserSlice) => void;
  logout: () => void;
}
