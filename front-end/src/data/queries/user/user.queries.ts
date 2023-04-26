import UserService from '../../services/auth/user.service';
import { IGetAuthUser } from '../../services/auth/userService.types';

export const getAuthenticatedUserQuery = {
  key: ['getAuthenticatedUser'],
  query: async (): Promise<IGetAuthUser> => await UserService.getAuthUser()
};
