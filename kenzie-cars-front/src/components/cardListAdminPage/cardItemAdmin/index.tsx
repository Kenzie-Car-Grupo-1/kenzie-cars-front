import { useNavigate } from "react-router-dom";
import { Item } from "../../CardList/cardItem/style";
import Button from "../../Button";
import { StyledButtonsDiv } from "./style";
import { useModal } from "../../../context/modal.context";
import ModalEditAd from "../../modals/modalEditAd";
import { ICar, useCars } from "../../../context/cars.context";

interface ICardItemProps {
  item: ICar;
}

const CardItemAdminPage = ({ item }: ICardItemProps) => {
  const navigate = useNavigate();
  const { setOpenModalEditAd, openModalEditAd } = useModal();
  const { setCarEdit } = useCars();

  const handleClick = (item: ICar) => {
    setCarEdit(item);
    setOpenModalEditAd(!openModalEditAd);
  };

  return (
    <Item>
      <div className="div-space">
        <div className="div-img">
          {item.isPublished ? (
            <span>Ativo</span>
          ) : (
            <span className="inactive">Inativo</span>
          )}

          <img src={item.images[0].url} alt={item.model} />
        </div>
        <div className="div-info">
          <p className="info-title">
            {item.brand} - {item.model}
          </p>
          <p className="info-text">{item.description}</p>
        </div>
      </div>
      <div className="div-space">
        {" "}
        <div className="div-extra">
          <div className="extra-tags">
            <p>{item.kms}KM</p>
            <p>{item.year}</p>
          </div>
          <p>
            {Number(item.price).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}{" "}
          </p>
        </div>
        <StyledButtonsDiv>
          <Button
            backgroundColor="var(--grey8)"
            buttonSize="medium"
            fontColor="var(--grey0)"
            borderColor="var(--grey0)"
            backgroundColorHover="var(--brand2)"
            borderColorHover="1.5px solid var(--brand1)"
            fontColorHover="var(--grey0)"
            onClick={() => handleClick(item)}
          >
            Editar
          </Button>
          <Button
            backgroundColor="var(--grey8)"
            buttonSize="medium"
            fontColor="var(--grey0)"
            borderColor="var(--grey0)"
            backgroundColorHover="var(--brand2)"
            borderColorHover="var(--brand1)"
            fontColorHover="var(--grey0)"
            onClick={() => navigate(`/dashboard/${item.id}`)}
          >
            Ver detalhes
          </Button>
        </StyledButtonsDiv>
      </div>
    </Item>
  );
};

export default CardItemAdminPage;
