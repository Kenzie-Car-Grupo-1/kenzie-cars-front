import { useCars } from "../../context/cars.context";
import CardItem from "./cardItem";
import { List } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { NoList } from "../cardListAdminPage/style";

const CardList = () => {
  const { filteredAds } = useCars();
  const navigate = useNavigate();
  const { search } = useLocation(); // Obtém os parâmetros de consulta
  const queryParams = new URLSearchParams(search); // Converte os parâmetros de consulta em um objeto URLSearchParams

  return (
    <List>
      {filteredAds.length > 0 ? (
        filteredAds.map((ad) => (
          <CardItem key={ad.id} item={ad} user={ad.user} />
        ))
      ) : (
        <NoList>
          <h1>Não temos nenhum carro desse modelo no momento...</h1>
        </NoList>
      )}
    </List>
  );
};

export default CardList;
