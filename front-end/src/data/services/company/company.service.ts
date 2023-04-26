import api from '../api';
import { ICompany, IPersistenceCompany } from '../auth/userService.types';
import { ICompanyFormType } from './companyService.types';
import { GetAllCompaniesMapper, CreateCompanyMapper } from './mapper';

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
}

export default new CompanyService();
