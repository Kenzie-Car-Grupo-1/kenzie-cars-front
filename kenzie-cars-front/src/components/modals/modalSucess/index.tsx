import { useNavigate } from "react-router-dom";
import { useModal } from "../../../context/modal.context";
import Icons from "../../../service/icons";
import Button from "../../Button";
import { StyleBackgroundModal, StyledButtonClose } from "../style";
import { StyledModalSucess } from "./style";

interface IModalSucessProps {
  tittle: string;
  message: string;
  messageDetail: string;
  toLogin?: boolean;
}

const ModalSucess = ({
  tittle,
  message,
  messageDetail,
  toLogin,
}: IModalSucessProps) => {
  const { setOpenModalSucess, openModalSucess } = useModal();
  const navigation = useNavigate();
  return (
    <StyleBackgroundModal>
      <StyledModalSucess>
        <div className="title">
          <h3>{tittle}</h3>
          <StyledButtonClose
            type="button"
            onClick={() => setOpenModalSucess(!openModalSucess)}
          >
            <Icons.Close />
          </StyledButtonClose>
        </div>
        <h4>{message}</h4>
        <p>{messageDetail}</p>

        {toLogin && (
          <Button
          className="toLogin"
            buttonSize="medium"
            onClick={() => {
              navigation("/login");
              setOpenModalSucess(false);
            }}
          >
            Ir para o login
          </Button>
        )}
      </StyledModalSucess>
    </StyleBackgroundModal>
  );
};

export default ModalSucess;
