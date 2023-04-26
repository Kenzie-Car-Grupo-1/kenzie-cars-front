import { useEffect } from "react";
import { useCars } from "../../context/cars.context";
import CardItem from "./cardItem";
import { List } from "./style";
import { useLocation, useNavigate } from "react-router-dom";

const CardList = () => {
  const { filteredAds } = useCars();
  const navigate = useNavigate();
  const { search } = useLocation(); // Obtém os parâmetros de consulta
  const queryParams = new URLSearchParams(search); // Converte os parâmetros de consulta em um objeto URLSearchParams

  return (
    <List>
      {filteredAds.length > 0 &&
        filteredAds.map((ad) => (
          <CardItem key={ad.id} item={ad} user={ad.user} />
        ))}
    </List>
  );
};

export default CardList;
