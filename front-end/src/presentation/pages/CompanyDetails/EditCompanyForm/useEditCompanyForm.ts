import { useForm } from 'react-hook-form';

export function useEditCompanyForm() {
  const { control } = useForm();

  return { control };
}
