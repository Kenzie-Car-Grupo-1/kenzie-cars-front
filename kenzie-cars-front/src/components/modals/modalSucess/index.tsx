import { useModal } from "../../../context/modal.context";
import Icons from "../../../service/icons";
import { StyleBackgroundModal, StyledButtonClose } from "../style";
import { StyledModalSucess } from "./style";

interface IModalSucessProps {
  tittle: string;
  message: string;
  messageDetail: string;
}

const ModalSucess = ({ tittle, message, messageDetail }: IModalSucessProps) => {
  const { setOpenModalSucess } = useModal();
  return (
    <StyleBackgroundModal>
      <StyledModalSucess>
        <div>
          <h3>{tittle}</h3>
          <StyledButtonClose
            type="button"
            onClick={() => setOpenModalSucess(false)}
          >
            <Icons.Close />
          </StyledButtonClose>
        </div>
        <h4>{message}</h4>
        <p>{messageDetail}</p>
      </StyledModalSucess>
    </StyleBackgroundModal>
  );
};

export default ModalSucess;
