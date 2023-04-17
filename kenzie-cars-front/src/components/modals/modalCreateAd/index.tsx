import Icons from "../../../service/icons";
import { StyleBackgroundModal, StyledButtonClose } from "../style";
import { useModal } from "../../../context/modal.context";
import { StyledFormCreateAd } from "./style";
import Input from "../../input";
import { useEffect, useState } from "react";
import axios from "axios";
import InputAutoComplete from "../../input/inputAutocomplete";

const ModalCreateAd = () => {
  const { setOpenModalCreateAd, openModalCreateAd } = useModal();
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const fetchBrands = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "https://kenzie-kars.herokuapp.com/cars/"
      );
      const brands = Object.keys(response.data);

      setBrands(brands);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };

  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(selectedOption.toLowerCase())
  );

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
        {brands.length > 0 ? (
          <InputAutoComplete
            options={brands}
            onSelect={handleSelect}
            isLoading={loading}
          />
        ) : (
          <p>Carregando marcas...</p>
        )}
        <InputAutoComplete
          options={["teste"]}
          onSelect={handleSelect}
          isLoading={loading}
        />
      </StyledFormCreateAd>
    </StyleBackgroundModal>
  );
};

export default ModalCreateAd;
