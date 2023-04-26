import * as yup from 'yup';

export const CreateCompanyFormSchema = yup.object().shape({
  cnpj: yup.string().required('Esse campo é obrigatório'),
  socialName: yup.string().required('Esse campo é obrigatório'),
  email: yup.string().required('Esse campo é obrigatório'),
  phoneNumber: yup.string().required('Esse campo é obrigatório'),
  postalCode: yup.string().required('Esse campo é obrigatório'),
  street: yup.string().required('Esse campo é obrigatório'),
  number: yup.string().required('Esse campo é obrigatório'),
  neighborhood: yup.string().required('Esse campo é obrigatório'),
  state: yup.string().required('Esse campo é obrigatório')
});
