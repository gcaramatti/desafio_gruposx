import api from '../api';
import { ICompany, IPersistenceCompany } from '../auth/userService.types';
import { GetAllCompaniesMapper } from './mapper';

class CompanyService {
  async getAllCompanies(): Promise<ICompany[]> {
    const { data } = await api.get('/companies');

    return data.data.map((value: IPersistenceCompany) =>
      GetAllCompaniesMapper.toDomain(value)
    );
  }
}

export default new CompanyService();
