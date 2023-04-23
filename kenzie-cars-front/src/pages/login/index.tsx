import { useContext } from "react";
import Button from "../../components/Button";
import Header from "../../components/headers";
import Input from "../../components/input";
import { StyleBox } from "../detailCar/style";
import { StyledForm } from "./style";
import { useUser } from "../../context/user.context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLoginSchema } from "../../validation/user.validation";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

interface ILoginRequest {
  email: string;
  password: string;
}

const Login = () => {
  const { LoginUser } = useUser();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginRequest>({
    resolver: yupResolver(userLoginSchema),
  });

  const onSubmit = async (data: ILoginRequest) => {
    console.log(data);
    await LoginUser(data);
  };

  return (
    <>
      <Header />
      <StyleBox>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1>Login</h1>
            <label>Usúario</label>
            <Input placeholder="Digite seu email" {...register(`email`)} />
            <span className="error">{errors.email?.message}</span>
            <label>Senha</label>
            <Input
              type="password"
              placeholder="Digite senha"
              {...register(`password`)}
            />
            <span className="error">{errors.password?.message}</span>
            <a href="/login/reset" className="span-forgot">
              Esqueceu a senha ?
            </a>
            <Button type="submit" buttonSize="big">
              Entrar
            </Button>

            <p>Ainda não possui conta ?</p>
            <Button
              buttonSize="big"
              backgroundColor="white"
              borderColor="gray"
              fontColor="black"
              backgroundColorHover="black"
              fontColorHover="white"
              borderColorHover="1.5px solid black"
              onClick={() => navigate("/register")}
            >
              Cadastrar
            </Button>
          </div>
        </StyledForm>
      </StyleBox>
      <Footer />
    </>
  );
};

export default Login;
