import { Mask } from '../../../../shared/utils';
import { ICompany, IPersistenceCompany } from '../companyService.types';

class GetAllCompaniesMapper {
  toDomain(persistenceCompany: IPersistenceCompany): ICompany {
    return {
      id: persistenceCompany.id,
      cnpj: Mask.apply('cnpj', persistenceCompany.cnpj),
      socialName: persistenceCompany.social_name,
      email: persistenceCompany.email,
      phoneNumber: Mask.apply('phone', persistenceCompany.phone_number),
      postalCode: Mask.apply('cep', persistenceCompany.postal_code),
      street: persistenceCompany.street,
      number: persistenceCompany.number,
      neighborhood: persistenceCompany.neighborhood,
      state: persistenceCompany.state
    };
  }
}

export default new GetAllCompaniesMapper();
