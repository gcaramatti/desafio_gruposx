import {
  ICompanyFormType,
  IStorePersistenceCompanyData
} from '../companyService.types';
import { Mask } from '../../../../shared/utils';

class CreateCompanyMapper {
  toPersistence(
    domainCompanyData: ICompanyFormType
  ): IStorePersistenceCompanyData {
    return {
      cnpj: Mask.remove(domainCompanyData.cnpj),
      social_name: domainCompanyData.socialName,
      email: domainCompanyData.email,
      phone_number: Mask.remove(domainCompanyData.phoneNumber),
      postal_code: Mask.remove(domainCompanyData.postalCode),
      street: domainCompanyData.street,
      number: domainCompanyData.number,
      neighborhood: domainCompanyData.neighborhood,
      state: domainCompanyData.state
    };
  }
}

export default new CreateCompanyMapper();
