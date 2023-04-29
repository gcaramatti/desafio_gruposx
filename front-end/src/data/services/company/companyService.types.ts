import { IPersistenceUser, IUser } from '../auth/userService.types';

export type ICompanyFormType = Omit<ICompany, 'id'>;

export type IStorePersistenceCompanyData = Omit<
  IPersistenceCompany,
  'id' | 'updated_at' | 'created_at'
>;

export interface IUpdateCompanyPayload {
  data: ICompanyFormType;
  id: number;
}

export interface IGetCompanyDetails {
  user: IUser[];
  company: ICompany;
}

export interface IPersistenceGetCompanyDetails {
  user: IPersistenceUser[];
  company: IPersistenceCompany;
}

export interface ICompany {
  id: number;
  cnpj: string;
  socialName: string;
  email: string;
  phoneNumber: string;
  postalCode: string;
  street: string;
  number: string;
  neighborhood: string;
  state: string;
}

export interface IPersistenceCompany {
  id: number;
  cnpj: string;
  social_name: string;
  email: string;
  phone_number: string;
  postal_code: string;
  street: string;
  number: string;
  neighborhood: string;
  state: string;
  created_at: null;
  updated_at: null;
}
