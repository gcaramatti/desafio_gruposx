import { useGetAddressByPostalCode } from '../../../../../shared/global/hooks/useGetAddressByPostalCode';

export function useCreateCompanyForm({ watch, setValue }: any) {
  const postalCode = watch('postalCode', '');

  const { data, isLoading } = useGetAddressByPostalCode({
    postalCode: postalCode
  });

  function onBlur() {
    if (data) {
      setValue('state', data.state);
      setValue('street', data.street);
      setValue('neighborhood', data.neighborhood);
    }
  }

  return { onBlur, isLoading };
}
