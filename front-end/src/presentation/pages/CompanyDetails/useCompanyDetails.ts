import { useQuery, useQueryClient } from 'react-query';
import { getCompanyDetailsQuery } from '../../../data/queries/company/company.queries';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function useCompanyDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [disabledCompanyButton, setDisabledCompanyButton] = useState(true);
  const queryClient = useQueryClient();
  const { companyId } = useParams();

  const {
    data,
    isLoading: isLoadingQuery,
    refetch
  } = useQuery(
    getCompanyDetailsQuery.key,
    async () => {
      return await getCompanyDetailsQuery.query(
        companyId ? parseInt(companyId) : 0
      );
    },
    {
      onSuccess: data => {
        queryClient.setQueryData(getCompanyDetailsQuery.key, data);
      },
      enabled: companyId !== undefined
    }
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return {
    data,
    editCompanyForm: {
      disabledCompanyButton,
      setDisabledCompanyButton
    },
    isLoading: isLoading ?? isLoadingQuery,
    refetch
  };
}
