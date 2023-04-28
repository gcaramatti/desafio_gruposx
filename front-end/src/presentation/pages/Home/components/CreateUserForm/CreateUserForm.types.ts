import {
  Control,
  FieldErrors,
  UseFormClearErrors,
  UseFormSetValue,
  UseFormWatch
} from 'react-hook-form';
import { IUserForm } from '../../../../../data/services/auth/userService.types';
import { ICompany } from '../../../../../data/services/company/companyService.types';

export interface ICreateUserFormPayload {
  companyList?: ICompany[];
  createUserForm: {
    createUserFormControl: Control<IUserForm>;
    createUserFormErrors: FieldErrors<IUserForm>;
    createUserFormSubmit: () => (
      e?: React.BaseSyntheticEvent | undefined
    ) => Promise<void>;
    watchCreateUserForm: UseFormWatch<IUserForm>;
    clearErrorsUserForm: UseFormClearErrors<IUserForm>;
    setValueUserForm: UseFormSetValue<IUserForm>;
  };
}

export interface IUseCreateUserForm {
  watch: UseFormWatch<IUserForm>;
  setValue: UseFormSetValue<IUserForm>;
  companyList: ICompany[] | undefined;
}
