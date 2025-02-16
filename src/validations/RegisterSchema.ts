import * as yup from 'yup';

export type IRegisterForm = yup.InferType<typeof RegisterSchema>;

export const RegisterSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  phone: yup.string().required('Celular é obrigatório'),
  email: yup
  .string()
  .email('Formato inválido')
  .required('E-mail é obrigatório'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(8, 'Mínimo 8 caracteres'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas devem coincidir')
    .required('Confirmação de senha é obrigatória')
    .min(8, 'Mínimo 8 caracteres'),
    terms: yup
    .boolean()
    .oneOf([true], 'Você precisa aceitar os Termos de uso'),
  privacy: yup
    .boolean()
    .oneOf([true], 'Você precisa aceitar a Política de privacidade'),
});

