import { useState } from 'react';
import { HomePageModalType } from './HomePage.types';
import { useQuery } from 'react-query';
import { getAllCompaniesQuery } from '../../../data/queries/company/company.queries';
import { toast } from 'react-toastify';

export function useHomePage() {
  const [modalOpen, setModalOpen] = useState<HomePageModalType>('closed');

  const { data: allCompanies } = useQuery(
    getAllCompaniesQuery.key,
    getAllCompaniesQuery.query,
    {
      onError: () => {
        toast.error('Erro desconhecido');
      }
    }
  );

  return { modalOpen, setModalOpen, allCompanies };
}
