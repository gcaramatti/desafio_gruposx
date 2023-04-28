import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IUseEditCompanyFormParams } from './EditCompanyFormComponent.types';
import { useMutation } from 'react-query';
import { updateCompanyMutation } from '../../../../../data/queries/company/company.mutations';
import {
  ICompanyFormType,
  IUpdateCompanyPayload
} from '../../../../../data/services/company/companyService.types';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

export function useEditCompanyForm({
  companyData,
  setDisabled
}: IUseEditCompanyFormParams) {
  const { control, setValue, handleSubmit } = useForm<ICompanyFormType>();
  const { companyId } = useParams();

  useEffect(() => {
    if (companyData) {
      setValue('cnpj', companyData.cnpj);
      setValue('socialName', companyData.socialName);
      setValue('phoneNumber', companyData.phoneNumber);
      setValue('email', companyData.email);
      setValue('neighborhood', companyData.neighborhood);
      setValue('number', companyData.number);
      setValue('postalCode', companyData.postalCode);
      setValue('state', companyData.state);
      setValue('street', companyData.street);
    }
  }, [companyData]);

  const updateCompanyUseMutation = useMutation(
    updateCompanyMutation.key,
    async (payload: IUpdateCompanyPayload) => {
      return await updateCompanyMutation.mutation(payload);
    },
    {
      onSuccess: () => {
        setDisabled(true);
        toast.success('Empresa atualizada com sucesso!');
      },
      onError: () => {
        toast.error('Erro ao atualizar empresa');
      }
    }
  );

  function onSubmitForm() {
    return handleSubmit(data => {
      updateCompanyUseMutation.mutate({
        data: data,
        id: companyId ? parseInt(companyId) : 0
      });
    });
  }

  return { control, onSubmitForm };
}
