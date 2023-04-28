import {
  IAuthService,
  IAuthServicePayload,
  IGetAuthUser,
  IUser,
  IUserDetails,
  IUserForm
} from './userService.types';
import { AuthUserMapper, CreateUserMapper, GetUsersMapper } from './mapper';

import api from '../api';

class UserService {
  async authenticate(payload: IAuthServicePayload): Promise<IAuthService> {
    const { data } = await api.post('/login', payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });

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

  async deleteUser(id: number): Promise<null> {
    const { data } = await api.delete(`/delete-user/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });

    return data;
  }

  async getUserDetails(userId: number): Promise<IUserDetails> {
    const { data } = await api.get(`/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });

    return GetUsersMapper.toDomain(data.data);
  }
}

export default new UserService();
