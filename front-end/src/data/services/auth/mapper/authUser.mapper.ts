import { IGetAuthUser, IPersistenceGetAuthUser } from '../userService.types';
import { Mask } from '../../../../shared/utils';

class AuthUserMapper {
  toDomain(persistenceUser: IPersistenceGetAuthUser): IGetAuthUser {
    return {
      user: {
        id: persistenceUser.user.id,
        cpf: Mask.apply('cpf', persistenceUser.user.cpf),
        name: persistenceUser.user.name,
        email: persistenceUser.user.email,
        phoneNumber: Mask.apply('phone', persistenceUser.user.phone_number),
        postalCode: Mask.apply('cep', persistenceUser.user.postal_code),
        street: persistenceUser.user.street,
        number: persistenceUser.user.number,
        neighborhood: persistenceUser.user.neighborhood,
        state: persistenceUser.user.state,
        companyId: persistenceUser.user.company_id
      },
      company: {
        id: persistenceUser.company.id,
        cnpj: Mask.apply('cnpj', persistenceUser.company.cnpj),
        socialName: persistenceUser.company.social_name,
        email: persistenceUser.company.email,
        phoneNumber: Mask.apply('phone', persistenceUser.company.phone_number),
        postalCode: Mask.apply('cep', persistenceUser.company.postal_code),
        street: persistenceUser.company.street,
        number: persistenceUser.company.number,
        neighborhood: persistenceUser.company.neighborhood,
        state: persistenceUser.company.state
      }
    };
  }
}

export default new AuthUserMapper();
