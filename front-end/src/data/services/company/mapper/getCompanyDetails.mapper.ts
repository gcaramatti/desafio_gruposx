import { GetUsersMapper, GetUsersOnCompanyDetails } from '../../auth/mapper';
import { IPersistenceUser } from '../../auth/userService.types';
import {
  IGetCompanyDetails,
  IPersistenceGetCompanyDetails
} from '../companyService.types';
import GetAllCompaniesMapper from './getAllCompanies.mapper';

class GetCompanyDetails {
  toDomain(companyDetails: IPersistenceGetCompanyDetails): IGetCompanyDetails {
    return {
      user: companyDetails.user
        ? companyDetails.user.map((value: IPersistenceUser) =>
            GetUsersOnCompanyDetails.toDomain(value)
          )
        : [],
      company: GetAllCompaniesMapper.toDomain(companyDetails.company)
    };
  }
}

export default new GetCompanyDetails();
