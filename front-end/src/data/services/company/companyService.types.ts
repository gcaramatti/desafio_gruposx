import { ICompany, IPersistenceCompany } from '../auth/userService.types';

export type ICompanyFormType = Omit<ICompany, 'id'>;

export type IStorePersistenceCompanyData = Omit<
  IPersistenceCompany,
  'id' | 'updated_at' | 'created_at'
>;
