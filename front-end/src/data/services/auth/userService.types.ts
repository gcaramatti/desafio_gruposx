import { ICompany, IPersistenceCompany } from '../company/companyService.types';

export interface IAuthServicePayload {
  email: string;
  password: string;
}

export interface IAuthService {
  token: string;
}

export interface IGetAuthUser {
  user: IUser;
  company: ICompany;
}

export interface IUserForm {
  cpf: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  postalCode: string;
  street: string;
  number: string;
  neighborhood: string;
  state: string;
  companyId: string;
}

export interface IUser {
  id: number;
  cpf: string;
  name: string;
  email: string;
  phoneNumber: string;
  postalCode: string;
  street: string;
  number: string;
  neighborhood: string;
  state: string;
  companyId: number;
}

export interface IPersistenceUser {
  id: number;
  cpf: string;
  name: string;
  email: string;
  phone_number: string;
  postal_code: string;
  street: string;
  number: string;
  neighborhood: string;
  state: string;
  company_id: number;
  email_verified_at: null;
  created_at: null;
  updated_at: null;
}

export interface IDomainToPersistenceUser {
  cpf: string;
  name: string;
  email: string;
  password: string;
  phone_number: string;
  postal_code: string;
  street: string;
  number: string;
  neighborhood: string;
  state: string;
  company_id: number;
}

export interface IPersistenceGetAuthUser {
  user: IPersistenceUser;
  company: IPersistenceCompany;
}
