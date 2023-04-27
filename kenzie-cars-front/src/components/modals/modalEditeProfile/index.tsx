import { StyledForm } from "../../../pages/register/style";
import {
  userEditeProfileSchema,
  userRegisterSchema,
} from "../../../validation/user.validation";
import Input from "../../input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { StyleBackgroundModal } from "../style";
import { useUser } from "../../../context/user.context";
import { StyledEditeButtons } from "./style";
import Button from "../../Button";
import { useModal } from "../../../context/modal.context";

const ModalEditeProfile = () => {
  const { user, EditeProfileUser } = useUser();
  const {
    setOpenModalEditeProfile,
    openModalEditeProfile,
    setOpenModalDeleteProfile,
    openModalDeleteProfile,
  } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(userEditeProfileSchema),
  });

  const submit = async (data: any) => {
    console.log(data);
    await EditeProfileUser(data);
  };
  return (
    <StyleBackgroundModal>
      {user && (
        <StyledForm onSubmit={handleSubmit(submit)}>
          <div>
            <h1>Editar Perfil</h1>
            <h2>Informações pessoais</h2>

            <label>Nome</label>
            <Input
              placeholder="Digite seu nome"
              {...register("firstname")}
              defaultValue={user.firstname}
            />
            {errors && (
              <span className="error">{!errors.firstname?.message}</span>
            )}

            <label>Sobrenome</label>
            <Input
              placeholder="Digite seu sobrenome"
              {...register("lastname")}
              defaultValue={user.lastname}
            />
            {errors && (
              <span className="error">{!errors.lastname?.message}</span>
            )}

            <label>Email</label>
            <Input
              placeholder="Digite seu email"
              {...register("email")}
              defaultValue={user.email}
            />
            {errors && <span className="error">{!errors.email?.message}</span>}

            <label>CPF</label>
            <Input
              placeholder="000.000.000-00"
              {...register("cpf")}
              defaultValue={user.cpf}
            />
            {errors && <span className="error">{!errors.cpf?.message}</span>}

            <label>Celular</label>
            <Input
              placeholder="(DDD) 9 0000-0000"
              {...register("contact")}
              defaultValue={user.contact}
            />
            {errors && (
              <span className="error">{!errors.contact?.message}</span>
            )}

            <label>Data de nascimento</label>
            <Input
              placeholder="00/00/00"
              {...register("birthdate")}
              defaultValue={user.birthdate}
            />
            {errors && (
              <span className="error">{!errors.birthdate?.message}</span>
            )}

            <label>Descrição</label>
            <Input
              placeholder="Digitar descrição"
              {...register("description")}
              defaultValue={user.description}
            />
            {errors && (
              <span className="error">{!errors.description?.message}</span>
            )}

            <StyledEditeButtons>
              <Button
                buttonSize="medium"
                backgroundColor="#DEE2E6"
                backgroundColorHover="#a7abae"
                fontColor="#495057"
                type="button"
                onClick={() => setOpenModalEditeProfile(!openModalEditeProfile)}
              >
                Cancelar
              </Button>
              <Button
                buttonSize="medium"
                backgroundColor="#FDD8D8"
                backgroundColorHover="#ecbbbb"
                fontColor="#CD2B31"
                type="button"
                onClick={() => {
                  setOpenModalEditeProfile(!openModalEditeProfile);
                  setOpenModalDeleteProfile(!openModalDeleteProfile);
                }}
              >
                Excluir perfil
              </Button>
              <Button buttonSize="medium" type="submit">
                Salvar alterações
              </Button>
            </StyledEditeButtons>
          </div>
        </StyledForm>
      )}
    </StyleBackgroundModal>
  );
};

export default ModalEditeProfile;
