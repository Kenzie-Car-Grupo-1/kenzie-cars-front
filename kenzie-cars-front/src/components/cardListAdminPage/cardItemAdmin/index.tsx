import { useNavigate } from "react-router-dom";
import { Item } from "../../CardList/cardItem/style";
import Button from "../../Button";
import { StyledButtonsDiv } from "./style";

const CardItemAdminPage = ({ item }: any) => {
  const navigate = useNavigate();

  return (
    <Item>
      <div className="div-img">
        <img
            src={item.images[0].url}
            alt={item.model}
          />
      </div>
      <div className="div-info">
        <p className="info-title">
          {item.brand} - {item.model}
        </p>
        <p className="info-text">{item.description}</p>
      </div>
      <div className="div-extra">
        <div className="extra-tags">
          <p>{item.kms}KM</p>
          <p>{item.year}</p>
        </div>
        <p>{item.price}</p>
      </div>
      <StyledButtonsDiv>
        <Button
          backgroundColor="var(--grey8)"
          buttonSize="medium"
          fontColor="var(--grey0)"
          borderColor="var(--grey0)"
          backgroundColorHover="var(--brand2)"
          borderColorHover="var(--brand1)"
          fontColorHover="var(--grey0)"
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
    </Item>
  );
};

export default CardItemAdminPage;
