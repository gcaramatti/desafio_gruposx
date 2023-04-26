import {
  IAuthService,
  IAuthServicePayload,
  IGetAuthUser
} from './userService.types';
import { AuthUserMapper } from './mapper';

import api from '../api';

class UserService {
  async authenticate(payload: IAuthServicePayload): Promise<IAuthService> {
    const { data } = await api.post('/login', payload);

    return data;
  }

  async getAuthUser(): Promise<IGetAuthUser> {
    const { data } = await api.get('/user');

    return AuthUserMapper.toDomain(data.data);
  }
}

export default new UserService();
