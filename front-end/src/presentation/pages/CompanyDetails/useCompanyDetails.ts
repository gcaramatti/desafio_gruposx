import { useQuery } from 'react-query';
import { getCompanyDetailsQuery } from '../../../data/queries/company/company.queries';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export function useCompanyDetails() {
  const [disabledCompanyButton, setDisabledCompanyButton] = useState(true);
  const { companyId } = useParams();

  const { data } = useQuery(
    getCompanyDetailsQuery.key,
    async () => {
      return await getCompanyDetailsQuery.query(
        companyId ? parseInt(companyId) : 0
      );
    },
    {
      enabled: companyId !== undefined
    }
  );

  return {
    data,
    editCompanyForm: {
      disabledCompanyButton,
      setDisabledCompanyButton
    }
  };
}
