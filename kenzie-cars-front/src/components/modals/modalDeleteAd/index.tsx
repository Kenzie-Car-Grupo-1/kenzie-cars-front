import { useCars } from "../../../context/cars.context";
import { useModal } from "../../../context/modal.context";
import { useUser } from "../../../context/user.context";
import Icons from "../../../service/icons";

import Button from "../../Button";
import {
  StyledEditeButtons,
  StyledFormModal,
} from "../modalEditeProfile/style";
import { StyleBackgroundModal, StyledButtonClose } from "../style";
import { StyledModalDelete } from "./style";

const ModalDeleteAd = () => {
  const {
    setOpenModalDeleteAd,
    openModalDeleteAd,
    setOpenModalEditAd,
    openModalEditAd,
  } = useModal();
  const { carEdit, DeleteAd } = useCars();

  const handleClick = async () => {
    // console.log(carEdit.brand);

    await DeleteAd(carEdit.id);
    
  };

  return (
    <StyleBackgroundModal>
      <StyledModalDelete>
        <div>
          <div className="title">
            <h2>Excluir anúncio</h2>
            <StyledButtonClose
              type="button"
              onClick={() => {
                setOpenModalDeleteAd(!openModalDeleteAd);
                // setOpenModalEditAd(!openModalEditAd);
              }}
            >
              <Icons.Close />
            </StyledButtonClose>
          </div>
          <h3>Tem certeza que deseja remover este anúncio?</h3>
          <p>
            Essa ação não pode ser desfeita. Isso excluíra permanentemente seu
            anúncio.
          </p>
          <div className="buttons">
            <Button
              buttonSize="medium"
              backgroundColor="#DEE2E6"
              backgroundColorHover="#a7abae"
              fontColor="#495057"
              type="button"
              onClick={() => setOpenModalDeleteAd(!openModalDeleteAd)}
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
                handleClick();
                // DeleteAdUser(user.id);
              }}
            >
              Sim, excluir anúncio
            </Button>
          </div>
        </div>
      </StyledModalDelete>
    </StyleBackgroundModal>
  );
};

export default ModalDeleteAd;
