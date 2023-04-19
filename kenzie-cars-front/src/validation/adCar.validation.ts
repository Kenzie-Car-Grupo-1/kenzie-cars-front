import * as yup from "yup";

const carAdSchema = yup.object().shape({
  brand: yup
    .string()
    .max(50, "A marca deve ter no máximo 50 caracteres")
    .required("A marca é obrigatória"),
  model: yup
    .string()
    .max(50, "O modelo deve ter no máximo 50 caracteres")
    .required("O modelo é obrigatório"),
  year: yup
    .string()
    .matches(/^\d{4}$/, "O ano deve ter 4 dígitos")
    .required("O ano é obrigatório"),
  fuel_type: yup.string().required("O tipo de combustível é obrigatório"),
  kms: yup
    .string()
    .matches(/^\d+(\.\d{1,2})?$/, "A quilometragem deve ser um valor válido")
    .required("A quilometragem é obrigatória"),
  color: yup
    .string()
    .max(10, "A cor deve ter no máximo 10 caracteres")
    .required("A cor é obrigatória"),
  price: yup
    .string()
    .matches(/^\d+(\.\d{1,2})?$/, "O preço deve ser um valor válido")
    .required("O preço é obrigatório"),
  description: yup
    .string()
    .max(255, "A descrição deve ter no máximo 255 caracteres")
    .required("A descrição é obrigatória"),
  image: yup
    .string()
    .url("Deve ser um url de imagem")
    .required("Imagem da capa obrigatório"),
});

export default carAdSchema;
