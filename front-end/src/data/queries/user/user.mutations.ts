import UserService from '../../services/auth/user.service';
import {
  IAuthServicePayload,
  IUserForm
} from '../../services/auth/userService.types';

export const authenticateUserMutation = {
  key: ['authenticateUser'],
  mutation: async (payload: IAuthServicePayload): Promise<string> => {
    const { token } = await UserService.authenticate(payload);

    return token;
  }
};

export const createUserMutation = {
  key: ['createUser'],
  mutation: async (payload: IUserForm): Promise<null> => {
    return await UserService.createUser(payload);
  }
};
