import * as yup from "yup";

const userSchema = yup.object().shape({
  email: yup.string().required("Email obrigatorio!!").email(),
  password: yup.string().required("Senha obrigatorio!"),
});

export default userSchema;
