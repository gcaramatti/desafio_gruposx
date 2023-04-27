import { IDomainToPersistenceUser, IUserForm } from '../userService.types';
import { Mask, Convert } from '../../../../shared/utils';

class CreateUserMapper {
  toPersistence(user: IUserForm): IDomainToPersistenceUser {
    return {
      cpf: Mask.remove(user.cpf),
      name: user.name,
      email: user.email,
      password: user.password,
      phone_number: Mask.remove(user.phoneNumber),
      postal_code: Mask.remove(user.postalCode),
      street: user.street,
      number: user.number,
      neighborhood: user.neighborhood,
      state: user.state,
      company_id: Convert.stringToNumber(user.companyId)
    };
  }
}

export default new CreateUserMapper();
