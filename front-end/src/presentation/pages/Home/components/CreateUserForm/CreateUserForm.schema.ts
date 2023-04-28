import * as yup from 'yup';

export const CreateUserFormSchema = yup.object().shape({
  cpf: yup.string().required('Esse campo é obrigatório'),
  name: yup.string().required('Esse campo é obrigatório'),
  email: yup
    .string()
    .email('Email inválido')
    .required('Esse campo é obrigatório'),
  password: yup.string().required('Esse campo é obrigatório'),
  companyId: yup.string().required('Esse campo é obrigatório'),
  phoneNumber: yup.string().required('Esse campo é obrigatório'),
  postalCode: yup.string().required('Esse campo é obrigatório'),
  street: yup.string().required('Esse campo é obrigatório'),
  number: yup.string().required('Esse campo é obrigatório'),
  neighborhood: yup.string().required('Esse campo é obrigatório'),
  state: yup.string().required('Esse campo é obrigatório')
});
