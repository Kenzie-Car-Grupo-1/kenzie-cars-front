import { useNavigate } from "react-router-dom";
import { Item } from "../../CardList/cardItem/style";
import Photo from "../../../assets/Photo.png";
import Button from "../../Button";
import { StyledButtonsDiv } from "./style";

const CardItemAdminPage = ({ item }: any) => {
  // const item = {
  //   id: 1,
  //   brand: "Maserati",
  //   model: "Ghibli",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   kms: 0,
  //   year: 2019,
  //   price: "R$00.000,00",
  // };
  const navigate = useNavigate();

  return (
    <Item>
      <div className="div-img">
        <img
          src={Photo}
          alt={item.model}
          onClick={() => navigate(`/dashboard/${item.id}`)}
        />
        {/* <img
            src={item.images[0].url}
            alt={item.model}
            onClick={() => navigate(`/dashboard/${item.id}`)}
          /> */}
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
          fontColorHover="var(--brand2)"
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
          fontColorHover="var(--brand2)"
        >
          Ver detalhes
        </Button>
      </StyledButtonsDiv>
    </Item>
  );
};

export default CardItemAdminPage;
