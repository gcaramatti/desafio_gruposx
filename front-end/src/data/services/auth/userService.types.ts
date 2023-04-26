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

export interface IPersistenceGetAuthUser {
  user: IPersistenceUser;
  company: IPersistenceCompany;
}
