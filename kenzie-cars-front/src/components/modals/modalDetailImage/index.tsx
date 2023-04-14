import Icons from "../../../service/icons";
import { StyleBackgroundModal, StyledButtonClose } from "../style";
import { StyledImageCarModal } from "./style";
import car from "../../../assets/06a5984f915f5060d7a5f3e0a5f7560d.png";
import { useModal } from "../../../context/modal.context";

const ModalDetailCar = () => {
  const { setOpenModalImageCar, imgForModal } = useModal();
  return (
    <StyleBackgroundModal>
      <StyledImageCarModal>
        <h1>Imagem do veiculo</h1>
        <div>
          <img src={imgForModal} alt="" />
        </div>
        <StyledButtonClose
          type="button"
          onClick={() => setOpenModalImageCar(false)}
        >
          <Icons.Close />
        </StyledButtonClose>
      </StyledImageCarModal>
    </StyleBackgroundModal>
  );
};

export default ModalDetailCar;
