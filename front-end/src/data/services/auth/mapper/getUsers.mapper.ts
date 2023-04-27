import { IPersistenceUser, IUser } from '../userService.types';
import { Mask } from '../../../../shared/utils';

class GetUsers {
  toDomain(persistenceUser: IPersistenceUser): IUser {
    return {
      id: persistenceUser.id,
      cpf: Mask.apply('cpf', persistenceUser.cpf),
      name: persistenceUser.name,
      email: persistenceUser.email,
      phoneNumber: Mask.apply('phone', persistenceUser.phone_number),
      postalCode: Mask.apply('cep', persistenceUser.postal_code),
      street: persistenceUser.street,
      number: persistenceUser.number,
      neighborhood: persistenceUser.neighborhood,
      state: persistenceUser.state,
      companyId: persistenceUser.company_id
    };
  }
}

export default new GetUsers();
