import CompanyService from '../../services/company/company.service';
import {
  ICompany,
  IGetCompanyDetails
} from '../../services/company/companyService.types';

export const getAllCompaniesQuery = {
  key: ['getAllCompanies'],
  query: async (): Promise<ICompany[]> => await CompanyService.getAllCompanies()
};

export const getCompanyDetailsQuery = {
  key: ['getCompanyDetails'],
  query: async (companyId: number): Promise<IGetCompanyDetails> => {
    return await CompanyService.getCompanyDetails(companyId);
  }
};
