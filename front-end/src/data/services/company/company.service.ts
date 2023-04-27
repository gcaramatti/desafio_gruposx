import api from '../api';
import {
  ICompany,
  ICompanyFormType,
  IGetCompanyDetails,
  IPersistenceCompany
} from './companyService.types';
import {
  GetAllCompaniesMapper,
  CreateCompanyMapper,
  GetCompanyDetails
} from './mapper';

class CompanyService {
  async getAllCompanies(): Promise<ICompany[]> {
    const { data } = await api.get('/companies', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });

    return data.data.map((value: IPersistenceCompany) =>
      GetAllCompaniesMapper.toDomain(value)
    );
  }

  async createCompany(payload: ICompanyFormType): Promise<null> {
    const { data } = await api.post(
      '/new-company',
      CreateCompanyMapper.toPersistence(payload)
    );

    return data;
  }

  async deleteCompany(companyId: number): Promise<null> {
    const { data } = await api.delete(`/delete-company/${companyId}`);

    return data;
  }

  async getCompanyDetails(companyId: number): Promise<IGetCompanyDetails> {
    const { data } = await api.get(`/company-users/${companyId}`);

    return GetCompanyDetails.toDomain(data.data);
  }
}

export default new CompanyService();
