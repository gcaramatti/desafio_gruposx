import { useQuery, useQueryClient } from 'react-query';
import { getAddresByPostalCodeQuery } from '../../../data/queries/external/external.queries';
import { IUseGetAddressByPostalCodeParams } from '../interfaces/useGetAddressByPostalCode.types';
import { toast } from 'react-toastify';

export function useGetAddressByPostalCode({
  postalCode
}: IUseGetAddressByPostalCodeParams) {
  const queryClient = useQueryClient();

  const { data, refetch, isLoading } = useQuery(
    getAddresByPostalCodeQuery.key,
    async () => {
      return await getAddresByPostalCodeQuery.query(postalCode);
    },
    {
      enabled: postalCode?.length === 9,
      onSuccess: data => {
        if (!data.postalCode) {
          toast.error('CEP não encontrado');
        }

        queryClient.setQueryData(getAddresByPostalCodeQuery.key, data);
      }
    }
  );

  return { data, refetch, isLoading };
}
