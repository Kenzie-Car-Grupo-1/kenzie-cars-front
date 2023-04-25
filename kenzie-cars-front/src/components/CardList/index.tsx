import { useEffect } from "react";
import { useCars } from "../../context/cars.context";
import CardItem from "./cardItem";
import { List } from "./style";
import { useLocation, useNavigate } from "react-router-dom";

const CardList = () => {
  const { ads } = useCars();
  const navigate = useNavigate();
  const { search } = useLocation(); // Obtém os parâmetros de consulta
  const queryParams = new URLSearchParams(search); // Converte os parâmetros de consulta em um objeto URLSearchParams
  const filteredAds = ads.filter((ad) => {
    const queryParams = new URLSearchParams(location.search);

    // Verifica se o parâmetro de consulta 'brand' está presente e se corresponde à marca do carro (case-insensitive)
    if (
      queryParams.has("brand") &&
      ad.brand.toLowerCase() !== queryParams.get("brand")?.toLowerCase()
    ) {
      return false;
    }

    // Verifica se o parâmetro de consulta 'model' está presente e se corresponde ao modelo do carro (case-insensitive)
    if (
      queryParams.has("model") &&
      ad.model.toLowerCase() !== queryParams.get("model")?.toLowerCase()
    ) {
      return false;
    }

    // Verifica se o parâmetro de consulta 'fuel_type' está presente e se corresponde ao tipo de combustível do carro (case-insensitive)
    if (
      queryParams.has("fuel_type") &&
      ad.fuel_type.toLowerCase() !== queryParams.get("fuel_type")?.toLowerCase()
    ) {
      return false;
    }

    // Verifica se o parâmetro de consulta 'color' está presente e se corresponde à cor do carro (case-insensitive)
    if (
      queryParams.has("color") &&
      ad.color.toLowerCase() !== queryParams.get("color")?.toLowerCase()
    ) {
      return false;
    }

    // Verifica se o parâmetro de consulta 'year' está presente e se corresponde ao ano do carro
    if (queryParams.has("year") && ad.year !== queryParams.get("year")) {
      return false;
    }

    // Verifica se o parâmetro de consulta 'kms' está presente e se corresponde aos quilômetros do carro
    if (
      queryParams.has("kms") &&
      ad.kms !== parseInt(queryParams.get("kms")!)
    ) {
      return false;
    }

    // Verifica se o parâmetro de consulta 'min_kms' está presente e se os quilômetros do carro são maiores ou iguais ao valor especificado
    if (
      queryParams.has("min_kms") &&
      ad.kms < parseInt(queryParams.get("min_kms")!)
    ) {
      return false;
    }

    // Verifica se o parâmetro de consulta 'max_kms' está presente e se os quilômetros do carro são menores ou iguais ao valor especificado
    if (
      queryParams.has("max_kms") &&
      ad.kms > parseInt(queryParams.get("max_kms")!)
    ) {
      return false;
    }

    // Verifica se o parâmetro de consulta 'min_price' está presente e se o preço do carro é maior ou igual ao valor especificado
    if (
      queryParams.has("min_price") &&
      parseInt(ad.price) < parseInt(queryParams.get("min_price")!)
    ) {
      return false;
    }

    // Verifica se o parâmetro de consulta 'max_price' está presente e se o preço do carro é menor ou igual ao valor especificado
    if (
      queryParams.has("max_price") &&
      parseInt(ad.price) > parseInt(queryParams.get("max_price")!)
    ) {
      return false;
    }

    // ad passou em todos os testes
    return true;
  });

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
