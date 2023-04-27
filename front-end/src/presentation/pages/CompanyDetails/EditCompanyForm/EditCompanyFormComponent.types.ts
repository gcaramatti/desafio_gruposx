import { Dispatch, SetStateAction } from 'react';
import { ICompany } from '../../../../data/services/company/companyService.types';

export interface IEditCompanyFormPayload {
  companyData: ICompany | undefined;
  setDisabled: Dispatch<SetStateAction<boolean>>;
  disabled: boolean;
}
