import { IUser } from '../../services/auth/userService.types';
import { ICompany } from '../../services/company/companyService.types';

export interface IAuthUserSlice {
  user: IUser;
  company: ICompany;
  isLogged: boolean;
}

export interface IUseAuthUser extends IAuthUserSlice {
  authenticate: (payload: IAuthUserSlice) => void;
  logout: () => void;
}
