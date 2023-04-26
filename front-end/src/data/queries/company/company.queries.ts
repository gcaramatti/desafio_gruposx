import { ICompany } from '../../services/auth/userService.types';
import CompanyService from '../../services/company/company.service';

export const getAllCompaniesQuery = {
  key: ['getAllCompanies'],
  query: async (): Promise<ICompany[]> => await CompanyService.getAllCompanies()
};
