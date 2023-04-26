import * as yup from "yup";

export const userLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatorio!!")
    .email("Deve ser um email válido"),
  password: yup.string().required("Senha obrigatorio!"),
});

const createAddressSchema = yup.object().shape({
  street: yup.string().required("Campo obrigatório"),
  number: yup.string().required("Campo obrigatório"),
  cep: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  complement: yup.string().required("Campo obrigatório"),
});

export const userRegisterSchema = yup.object().shape({
  firstname: yup.string().required("Campo obrigatório"),
  lastname: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
  confirm_password: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),
  cpf: yup.string().required("Campo obrigatório"),
  contact: yup.string().required("Campo obrigatório"),
  isWhatsapp: yup.boolean().required("Campo obrigatório"),
  birthdate: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
  isSalesman: yup.boolean().required("Campo obrigatório"),
  address: createAddressSchema,
});

export const userEditeProfileSchema = yup.object().shape({
  firstname: yup.string().required("Campo obrigatório"),
  lastname: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Campo obrigatório"),
  cpf: yup.string().required("Campo obrigatório"),
  contact: yup.string().required("Campo obrigatório"),
  birthdate: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
});
