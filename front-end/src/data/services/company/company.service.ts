import api from '../api';
import {
  ICompany,
  ICompanyFormType,
  IGetCompanyDetails,
  IPersistenceCompany,
  IUpdateCompanyPayload
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
      CreateCompanyMapper.toPersistence(payload),
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      }
    );

    return data;
  }

  async updateCompany(payload: IUpdateCompanyPayload): Promise<null> {
    const { data } = await api.put(
      `/update-company/${payload.id}`,
      CreateCompanyMapper.toPersistence(payload.data),
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      }
    );

    return data;
  }

  async deleteCompany(companyId: number): Promise<null> {
    const { data } = await api.delete(`/delete-company/${companyId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });

    return data;
  }

  async getCompanyDetails(companyId: number): Promise<IGetCompanyDetails> {
    const { data } = await api.get(`/company-users/${companyId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });

    return GetCompanyDetails.toDomain(data.data);
  }
}

export default new CompanyService();
