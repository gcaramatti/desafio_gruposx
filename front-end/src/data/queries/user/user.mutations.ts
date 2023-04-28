import UserService from '../../services/auth/user.service';
import {
  IAuthServicePayload,
  IUpdateUserPayload,
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

export const createUserOnboardingMutation = {
  key: ['createUserOnboarding'],
  mutation: async (payload: IUserForm): Promise<null> => {
    return await UserService.createUserOnOnboarding(payload);
  }
};

export const deleteUserMutation = {
  key: ['deleteUser'],
  mutation: async (id: number): Promise<null> => {
    return await UserService.deleteUser(id);
  }
};

export const updateUserMutation = {
  key: ['updateUser'],
  mutation: async (payload: IUpdateUserPayload): Promise<null> => {
    return await UserService.updateUser(payload);
  }
};
