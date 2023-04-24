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

interface ISendEmail {
  email: string;
}

const sendEmailSchema = yup.object().shape({
  email: yup
    .string()
    .required("email obrigatório")
    .email("deve ser um email válido"),
});

const ResetPassword = () => {
  const navigate = useNavigate();
  const { setOpenModalSucess, openModalSucess } = useModal();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ISendEmail>({
    resolver: yupResolver(sendEmailSchema),
  });

  const sendEmail = async (data: ISendEmail) => {
    console.log(data);

    try {
      const res = await baseUrl.post<ISendEmail>("/users/resetPassword/", data);
      setOpenModalSucess(true);
    } catch (error: unknown) {
      toast.error("Email não encontrado");
      console.log(error);
    }
  };

  const onSubmit = async (data: ISendEmail) => {
    await sendEmail(data);
  };

  return (
    <>
      <Header />
      <StyledDivContent>
        <StyledFormReset onSubmit={handleSubmit(onSubmit)}>
          <h3>Esqueceu sua senha?</h3>
          <p>
            É só informar seu email abaixo. Você vai receber uma mensagem com um
            link para poder criar uma nova senha.
          </p>
          <label>Email</label>
          <Input
            placeholder="Digitar email"
            type="email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

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
              Enviar
            </Button>
          </div>
        </StyledFormReset>
      </StyledDivContent>
      <Footer />
      {openModalSucess && (
        <ModalSucess
          tittle="Recuperação de senha"
          message="Email enviado com sucesso !"
          messageDetail="Verifique sua caixa de correio e siga as instruções para recuperar sua senha."
        />
      )}
    </>
  );
};

export default ResetPassword;
