import UserService from '../../services/auth/user.service';
import {
  IGetAuthUser,
  IUserDetails
} from '../../services/auth/userService.types';

export const getAuthenticatedUserQuery = {
  key: ['getAuthenticatedUser'],
  query: async (): Promise<IGetAuthUser> => await UserService.getAuthUser()
};

export const getUserDetailsQuery = {
  key: ['getUserDetails'],
  query: async (userId: number): Promise<IUserDetails> => {
    return await UserService.getUserDetails(userId);
  }
};
