import { useModal } from "../../../context/modal.context";
import { useUser } from "../../../context/user.context";

import Button from "../../Button";
import { StyledEditeButtons, StyledFormModal } from "../modalEditeProfile/style";
import { StyleBackgroundModal } from "../style";

const ModalDeleteProfile = () => {
  const { setOpenModalDeleteProfile, openModalDeleteProfile } = useModal();
  const { DeleteProfileUser, user } = useUser();
  return (
    <StyleBackgroundModal>
      <StyledFormModal>
        <div>
          <h3>Tem certeza que deseja deletar sua conta?</h3>
          <h4>Todos os seus anúncios e dados seram apagados permanentemente</h4>
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
      </StyledFormModal>
    </StyleBackgroundModal>
  );
};

export default ModalDeleteProfile;
