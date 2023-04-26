import { useModal } from "../../../context/modal.context";
import { useUser } from "../../../context/user.context";
import { StyledForm } from "../../../pages/register/style";
import Button from "../../Button";
import { StyledEditeButtons } from "../modalEditeProfile/style";
import { StyleBackgroundModal } from "../style";

const ModalDeleteProfile = () => {
  const { setOpenModalDeleteProfile, openModalDeleteProfile } = useModal();
  const { DeleteProfileUser, user } = useUser();
  return (
    <StyleBackgroundModal>
      <StyledForm>
        <div>
          <h1>Tem certeza que deseja deletar sua conta?</h1>
          <h2>Todos os seus anúncios e dados seram apagados permanentemente</h2>
          <StyledEditeButtons>
            <Button
              buttonSize="medium"
              backgroundColor="#DEE2E6"
              backgroundColorHover="#a7abae"
              fontColor="#495057"
              type="button"
              onClick={() => setOpenModalDeleteProfile(!openModalDeleteProfile)}
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
                DeleteProfileUser(user.id);
                localStorage.clear();
              }}
            >
              Excluir perfil
            </Button>
          </StyledEditeButtons>
        </div>
      </StyledForm>
    </StyleBackgroundModal>
  );
};

export default ModalDeleteProfile;
