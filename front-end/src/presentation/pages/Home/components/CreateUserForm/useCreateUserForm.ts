import { ICompany } from '../../../../../data/services/company/companyService.types';
import { useGetAddressByPostalCode } from '../../../../../shared/global/hooks/useGetAddressByPostalCode';
import { IUseCreateUserForm } from './CreateUserForm.types';

export function useCreateUserForm({
  watch,
  setValue,
  companyList
}: IUseCreateUserForm) {
  const postalCode = watch('postalCode', '');

  const { data, isLoading } = useGetAddressByPostalCode({
    postalCode: postalCode
  });

  const selectCompanyOptions: { value: string; label: string }[] = [];

  if (companyList) {
    companyList.map((value: ICompany) => {
      selectCompanyOptions.push({
        value: String(value.id),
        label: value.socialName
      });
    });
  }

  function onBlur() {
    if (data) {
      setValue('state', data.state);
      setValue('street', data.street);
      setValue('neighborhood', data.neighborhood);
    }
  }

  return { onBlur, isLoading, selectCompanyOptions };
}
