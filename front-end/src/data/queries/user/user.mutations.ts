import UserService from '../../services/auth/user.service';
import { IAuthServicePayload } from '../../services/auth/userService.types';

export const authenticateUserMutation = {
  key: ['authenticateUser'],
  mutation: async (payload: IAuthServicePayload): Promise<string> => {
    const { token } = await UserService.authenticate(payload);

    return token;
  }
};
