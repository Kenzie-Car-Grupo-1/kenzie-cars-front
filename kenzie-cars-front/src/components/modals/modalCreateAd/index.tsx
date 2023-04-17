import Icons from "../../../service/icons";
import { StyleBackgroundModal, StyledButtonClose } from "../style";
import { useModal } from "../../../context/modal.context";
import { StyledFormCreateAd } from "./style";
import Input from "../../input";

const ModalCreateAd = () => {
  const { setOpenModalCreateAd, openModalCreateAd } = useModal();
  return (
    <StyleBackgroundModal>
      <StyledFormCreateAd>
        <div className="title">
          <h3>Criar Anúncio</h3>
          <StyledButtonClose
            type="button"
            onClick={() => setOpenModalCreateAd(false)}
          >
            <Icons.Close />
          </StyledButtonClose>
        </div>
        <h4>Informações do veículo</h4>
        <label htmlFor="">Marca</label>
        <Input placeholder="Mercedez Benz" fontColor="color: #868E96" />
      </StyledFormCreateAd>
    </StyleBackgroundModal>
  );
};

export default ModalCreateAd;
