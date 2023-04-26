import * as yup from 'yup';

export const LoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('Esse campo é obrigatório'),
  password: yup.string().required('Esse campo é obrigatório')
});
