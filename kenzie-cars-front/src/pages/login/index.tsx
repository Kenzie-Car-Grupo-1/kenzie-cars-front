import { useContext } from "react";
import Button from "../../components/Button";
import Header from "../../components/headers";
import Input from "../../components/input";
import { StyleBox } from "../detailCar/style";
import { StyledForm } from "./style";
import { useUser } from "../../context/user.context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import userSchema from "../../validation/user.validation";

const Login = () => {
  /* const { LoginUser } = useUser(); */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  return (
    <>
      <Header />
      <StyleBox>
        <StyledForm>
          <div>
            <h1>Login</h1>
            <label>Usúario</label>
            <Input placeholder="Digite seu email" {...register(`email`)} />
            <label>Senha</label>
            <Input placeholder="Digite senha" {...register(`password`)} />
            <span>Esqueceu a senha ?</span>
            <Button> Entrar</Button>

            <p>Ainda não possui conta ?</p>
            <Button
              backgroundColor="white"
              borderColor="gray"
              fontColor="black"
            >
              Cadastrar
            </Button>
          </div>
        </StyledForm>
      </StyleBox>
    </>
  );
};

export default Login;
