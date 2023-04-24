import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/footer";
import Header from "../../components/headers";
import Input from "../../components/input";
import { StyledDivContent, StyledFormReset } from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosError } from "axios";
import { useModal } from "../../context/modal.context";
import ModalSucess from "../../components/modals/modalSucess";
import { ToastContent, toast } from "react-toastify";
import { baseUrl } from "../../service/axios";

interface IResetPassword {
  password: string;
  passwordMatch: string;
}

interface IResetPasswordRequest {
  password: string;
}

const resetPasswordSchema = yup.object().shape({
  password: yup.string().required("Senha obrigatória"),
  passwordMatch: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

const ResetPasswordToken = () => {
  const navigate = useNavigate();
  const { setOpenModalSucess, openModalSucess } = useModal();
  const { tokenReset } = useParams();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPassword>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const resetPassword = async (
    data: IResetPasswordRequest,
    resetToken: string
  ) => {
    console.log(data);

    try {
      const res = await baseUrl.patch<IResetPasswordRequest>(
        `/users/resetPassword/${resetToken}`,
        data
      );
      setOpenModalSucess(true);
    } catch (error: unknown) {
      toast.error("Aconteceu um erro, tente novamente");
      console.log(error);
    }
  };

  const onSubmit = async ({ password }: IResetPassword) => {
    const data = {
      password: password,
    };

    await resetPassword(data, tokenReset!);
  };

  return (
    <>
      <Header />
      <StyledDivContent>
        <StyledFormReset onSubmit={handleSubmit(onSubmit)}>
          <h3>Alterar senha</h3>
          <p>Digite um nova senha para sua conta e confirme.</p>
          <label>Nova senha</label>
          <Input
            placeholder="Digitar senha"
            type="password"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
          <label>Confirmação de senha</label>
          <Input
            placeholder="Digitar email"
            type="password"
            {...register("passwordMatch")}
          />
          <span>{errors.passwordMatch?.message}</span>

          <div>
            <Button
              className="login"
              buttonSize="medium"
              backgroundColor="white"
              fontColor="black"
              onClick={() => navigate(`/login`)}
            >
              {"<"} Voltar login
            </Button>
            <Button type="submit" buttonSize="medium">
              Confirmar
            </Button>
          </div>
        </StyledFormReset>
      </StyledDivContent>
      <Footer />
      {openModalSucess && (
        <ModalSucess
          tittle="Alteração de senha"
          message="Senha alterada com sucesso !"
          messageDetail="Clique em login e utilize sua nova senha"
          toLogin
        />
      )}
    </>
  );
};

export default ResetPasswordToken;
