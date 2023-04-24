import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import Footer from "../../components/footer";
import Header from "../../components/headers";
import Input from "../../components/input";
import { BoxSection, StyledForm, StyleBox } from "./style";
import { useForm } from "react-hook-form";
import { userRegisterSchema } from "../../validation/user.validation";
import { useUser } from "../../context/user.context";
import ModalSucess from "../../components/modals/modalSucess";
import { useModal } from "../../context/modal.context";

interface ICreateUserFormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirm_password: string;
  cpf: string;
  contact: string;
  isWhatsapp: boolean;
  birthdate: string;
  description: string;
  isSalesman: boolean;
  address: {
    street: string;
    number: string;
    cep: string;
    city: string;
    state: string;
    complement: string;
  };
}

const Register = () => {
  const { registerNewUser } = useUser();
  const { openModalSucess, setOpenModalSucess } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateUserFormData>({
    resolver: yupResolver(userRegisterSchema),
  });

  const submit = async (data: ICreateUserFormData) => {
    console.log(data);
    await registerNewUser(data);
  };

  return (
    <>
      <Header />
      <StyleBox>
        <StyledForm onSubmit={handleSubmit(submit)}>
          <div>
            <h1>Cadastro</h1>
            <h2>Informações pessoais</h2>
            <label>Nome</label>
            <Input placeholder="Digite seu nome" {...register("firstname")} />
            <span className="error">{errors.firstname?.message}</span>

            <label>Sobrenome</label>
            <Input
              placeholder="Digite seu sobrenome"
              {...register("lastname")}
            />
            <span className="error">{errors.lastname?.message}</span>

            <label>Email</label>
            <Input placeholder="Digite seu email" {...register("email")} />
            <span className="error">{errors.email?.message}</span>

            <label>CPF</label>
            <Input placeholder="000.000.000-00" {...register("cpf")} />
            <span className="error">{errors.cpf?.message}</span>

            <label>Celular</label>
            <Input placeholder="(DDD) 9 0000-0000" {...register("contact")} />
            <span className="error">{errors.contact?.message}</span>

            <label>Whatsapp</label>
            <select id="isWhatsapp" {...register("isWhatsapp")}>
              <option value={true.toString()}>Sim</option>
              <option value={false.toString()}>Não</option>
            </select>
            <span className="error">{errors.isWhatsapp?.message}</span>

            <label>Data de nascimento</label>
            <Input placeholder="00/00/00" {...register("birthdate")} />
            <span className="error">{errors.birthdate?.message}</span>

            <label>Descrição</label>
            <Input
              placeholder="Digitar descrição"
              {...register("description")}
            />
            <span className="error">{errors.description?.message}</span>

            <h2>Informações de endereço </h2>
            <label>CEP</label>
            <Input placeholder="00000.000" {...register("address.cep")} />
            <span className="error">{errors.address?.cep?.message}</span>

            <BoxSection>
              <div>
                <label>Estado</label>
                <Input
                  placeholder="Digitar estado"
                  {...register("address.state")}
                />
                <span className="error">{errors.address?.state?.message}</span>
              </div>
              <div>
                <label>Cidade</label>
                <Input
                  placeholder="Digitar cidade"
                  {...register("address.city")}
                />
                <span className="error">{errors.address?.city?.message}</span>
              </div>
            </BoxSection>

            <label>Rua</label>
            <Input placeholder="Digite rua" {...register("address.street")} />
            <span className="error">{errors.address?.street?.message}</span>

            <BoxSection>
              <div>
                <label>Numero</label>
                <Input
                  placeholder="Digite numero"
                  {...register("address.number")}
                />
                <span className="error">{errors.address?.number?.message}</span>
              </div>
              <div>
                <label>Complemento</label>
                <Input
                  placeholder="Ex: apart 307"
                  {...register("address.complement")}
                />
                <span className="error">
                  {errors.address?.complement?.message}
                </span>
              </div>
            </BoxSection>

            <label>Tipo de conta</label>
            <BoxSection>
              <div>
                <label className="radio-button-label">
                  <input
                    type="radio"
                    value={true.toString()}
                    {...register("isSalesman")}
                  />
                  <span className="radio-button-text">Comprador</span>
                </label>
              </div>
              <div>
                <label className="radio-button-label">
                  <input
                    type="radio"
                    value={false.toString()}
                    {...register("isSalesman")}
                  />
                  <span className="radio-button-text">Anunciante</span>
                </label>
                <div>
                  <span className="error">{errors.isSalesman?.message}</span>
                </div>
              </div>
            </BoxSection>

            <label>Senha</label>
            <Input
              type="password"
              placeholder="Digite senha"
              {...register("password")}
            />
            <span className="error">
              <span className="error"></span>
              {errors.password?.message}
            </span>

            <label>Confirmar senha</label>
            <Input
              type="password"
              placeholder="Digite senha"
              {...register("confirm_password")}
            />
            <span className="error">{errors.confirm_password?.message}</span>

            <Button buttonSize="big" type="submit">
              Finalizar cadastro
            </Button>
          </div>
        </StyledForm>
      </StyleBox>
      <Footer />

      {openModalSucess && (
        <ModalSucess
          tittle="Sucesso!"
          message="Sua conta foi criada com sucesso"
          messageDetail="Agora você poderá ver seus negócios crescendo em grande escala"
          toLogin
        />
      )}
    </>
  );
};

export default Register;
