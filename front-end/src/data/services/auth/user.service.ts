import {
  IAuthService,
  IAuthServicePayload,
  IGetAuthUser,
  IUserForm
} from './userService.types';
import { AuthUserMapper, CreateUserMapper } from './mapper';

import api from '../api';

class UserService {
  async authenticate(payload: IAuthServicePayload): Promise<IAuthService> {
    const { data } = await api.post('/login', payload);

    return data;
  }

  async getAuthUser(): Promise<IGetAuthUser> {
    const { data } = await api.get('/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });

    return AuthUserMapper.toDomain(data.data);
  }

  async createUser(payload: IUserForm): Promise<null> {
    const { data } = await api.post(
      '/new-user',
      CreateUserMapper.toPersistence(payload),
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      }
    );

    return data;
  }
}

export default new UserService();
