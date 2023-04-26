import {
  Control,
  FieldErrors,
  UseFormClearErrors,
  UseFormSetValue,
  UseFormWatch
} from 'react-hook-form';
import { ICompanyFormType } from '../../../../../data/services/company/companyService.types';

export interface ICreateCompanyForm {
  createCompanyForm: {
    createCompanyFormControl: Control<ICompanyFormType>;
    createCompanyFormErrors: FieldErrors<ICompanyFormType>;
    createCompanyFormSubmit: () => (
      e?: React.BaseSyntheticEvent | undefined
    ) => Promise<void>;
    watchCreateCompanyForm: UseFormWatch<ICompanyFormType>;
    clearErrorsCompanyForm: UseFormClearErrors<ICompanyFormType>;
    setValueCompanyForm: UseFormSetValue<ICompanyFormType>;
  };
}
