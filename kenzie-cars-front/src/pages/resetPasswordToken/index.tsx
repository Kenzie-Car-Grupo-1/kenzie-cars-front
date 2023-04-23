import { useNavigate } from "react-router-dom";
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

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPassword>({
    resolver: yupResolver(resetPasswordSchema),
  });

  // const resetPassword = async (data: IResetPassword) => {
  //   console.log(data);

  //   try {
  //     const res = await baseUrl.post<IResetPassword>(
  //       "/users/resetPassword/",
  //       data
  //     );
  //     setOpenModalSucess(true);
  //   } catch (error: unknown) {
  //     toast.error("Email não encontrado");
  //     console.log(error);
  //   }
  // };

  const onSubmit = async ({ password }: IResetPassword) => {
    console.log(password);

    // await sendEmail(data);
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
          tittle="Recuperação de senha"
          message="Email enviado com sucesso !"
          messageDetail="Verifique sua caixa de correio no email e siga as instruções para recuperar sua senha."
        />
      )}
    </>
  );
};

export default ResetPasswordToken;
