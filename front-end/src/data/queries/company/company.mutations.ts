import CompanyService from '../../services/company/company.service';
import { ICompanyFormType } from '../../services/company/companyService.types';

export const createCompanyMutation = {
  key: ['createCompany'],
  mutation: async (payload: ICompanyFormType): Promise<null> => {
    return await CompanyService.createCompany(payload);
  }
};

export const deleteCompanyMutation = {
  key: ['deleteCompany'],
  mutation: async (companyId: number): Promise<null> => {
    return await CompanyService.deleteCompany(companyId);
  }
};
