import {
  userEditeProfileSchema,
  userRegisterSchema,
} from "../../../validation/user.validation";
import Input from "../../input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { StyleBackgroundModal, StyledButtonClose } from "../style";
import { useUser } from "../../../context/user.context";
import { StyledEditeButtons, StyledFormModal } from "./style";
import Button from "../../Button";
import { useModal } from "../../../context/modal.context";
import Icons from "../../../service/icons";
import { motion, AnimatePresence } from "framer-motion";

interface IUpdateProfile {
  firstname: string;
  lastname: string;
  email: string;
  cpf: string;
  contact: string;
  birthdate: string;
  description: string;
}

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
  } = useForm<IUpdateProfile>({
    resolver: yupResolver(userEditeProfileSchema),
  });

  const submit = async (data: any) => {
    console.log(data);
    await EditeProfileUser(data);
  };
  return (
    <StyleBackgroundModal>
      {user && (
        <AnimatePresence>
          <StyledFormModal
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="form"
            onSubmit={handleSubmit(submit)}
          >
            <div>
              <div className="title">
                <h3>Editar Perfil</h3>
                <StyledButtonClose
                  type="button"
                  onClick={() =>
                    setOpenModalEditeProfile(!openModalEditeProfile)
                  }
                >
                  <Icons.Close />
                </StyledButtonClose>
              </div>
              <h4>Informações pessoais</h4>

              <label>Nome</label>
              <Input
                placeholder="Digite seu nome"
                {...register("firstname")}
                defaultValue={user.firstname}
              />
              <span className="error">{errors.firstname?.message}</span>

              <label>Sobrenome</label>
              <Input
                placeholder="Digite seu sobrenome"
                {...register("lastname")}
                defaultValue={user.lastname}
              />
              <span className="error">{errors.lastname?.message}</span>

              <label>Email</label>
              <Input
                placeholder="Digite seu email"
                {...register("email")}
                defaultValue={user.email}
              />
              <span className="error">{errors.email?.message}</span>

              <label>CPF</label>
              <Input
                placeholder="000.000.000-00"
                {...register("cpf")}
                defaultValue={user.cpf}
              />
              <span className="error">{errors.cpf?.message}</span>

              <label>Celular</label>
              <Input
                placeholder="(DDD) 9 0000-0000"
                {...register("contact")}
                defaultValue={user.contact}
              />
              <span className="error">{errors.contact?.message}</span>

              <label>Data de nascimento</label>
              <Input
                placeholder="00/00/00"
                {...register("birthdate")}
                defaultValue={user.birthdate}
              />
              <span className="error">{errors.birthdate?.message}</span>

              <label>Descrição</label>
              <Input
                placeholder="Digitar descrição"
                {...register("description")}
                defaultValue={user.description}
              />
              <span className="error">{errors.description?.message}</span>

              <StyledEditeButtons>
                <Button
                  buttonSize="medium"
                  backgroundColor="#DEE2E6"
                  backgroundColorHover="#a7abae"
                  fontColor="#495057"
                  type="button"
                  onClick={() =>
                    setOpenModalEditeProfile(!openModalEditeProfile)
                  }
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
          </StyledFormModal>
        </AnimatePresence>
      )}
    </StyleBackgroundModal>
  );
};

export default ModalEditeProfile;
