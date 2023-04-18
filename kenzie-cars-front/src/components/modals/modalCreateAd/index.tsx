import Icons from "../../../service/icons";
import { StyleBackgroundModal, StyledButtonClose } from "../style";
import { useModal } from "../../../context/modal.context";
import { StyledDivContent, StyledFormCreateAd } from "./style";
import Input from "../../input";
import { useEffect, useState } from "react";
import axios from "axios";
import InputAutoComplete from "../../input/inputAutocomplete";
import Button from "../../Button";

interface ICar {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}

const ModalCreateAd = () => {
  const { setOpenModalCreateAd, openModalCreateAd } = useModal();
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [models, setModels] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const [loadingBrands, setLoadingBrands] = useState<boolean>(false);
  const [loadingModels, setLoadingModels] = useState<boolean>(false);

  const fetchBrands = async () => {
    try {
      setLoadingBrands(true);

      const response = await axios.get(
        "https://kenzie-kars.herokuapp.com/cars/"
      );
      const brands = Object.keys(response.data);

      setBrands(brands);
      setLoadingBrands(false);
    } catch (error) {
      console.error(error);
      setLoadingBrands(false);
    }
  };

  const fetchModels = async (brand: string) => {
    try {
      setLoadingModels(true);

      const response = await axios.get(
        `https://kenzie-kars.herokuapp.com/cars?brand=${brand}`
      );
      const models = response.data.map((model: ICar) => model.name);

      setModels(models);
      setLoadingModels(false);
    } catch (error) {
      console.error(error);
      setLoadingModels(false);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <StyleBackgroundModal>
      <StyledDivContent>
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
              onSelect={(value: string) => {
                setSelectedBrand(value);
                fetchModels(value);
              }}
              isLoading={loadingBrands}
              placeholder="Digite a marca do veículo"
            />
          ) : (
            <p>Carregando marcas...</p>
          )}
          <label htmlFor="">Modelo</label>
          <InputAutoComplete
            options={models}
            onSelect={handleSelect}
            isLoading={loadingModels}
            placeholder="Digite o modelo do veículo"
          />
          <div className="div-colum">
            <div>
              <label htmlFor="">Ano</label>
              <Input placeholder="Ano do veículo" />
            </div>
            <div>
              <label htmlFor="">Combustível</label>
              <Input placeholder="Gasolina / Etanol" />
            </div>
          </div>
          <div className="div-colum">
            <div>
              <label htmlFor="">Quilometragem</label>
              <Input placeholder="Ano do veículo" />
            </div>
            <div>
              <label htmlFor="">Cor</label>
              <Input placeholder="Gasolina / Etanol" />
            </div>
          </div>
          <div className="div-colum">
            <div>
              <label htmlFor="">Preço tabela FIPE</label>
              <Input placeholder="Ano do veículo" />
            </div>
            <div>
              <label htmlFor="">Preço</label>
              <Input placeholder="Gasolina / Etanol" />
            </div>
          </div>
          <label htmlFor="">Descrição</label>
          <textarea placeholder="Descreva seu anúncio aqui.." />
          <label htmlFor="">Imagem da capa</label>
          <Input placeholder="http://image.com" />
          <label htmlFor="">1ª imagem da galeria</label>
          <Input placeholder="http://image.com" />
          <label htmlFor="">2ª imagem da galeria</label>
          <Input placeholder="http://image.com" />
          <Button
            buttonSize="medium"
            backgroundColor="var(--brand4)"
            fontColor="var(--brand1)"
            fontColorHover="white"
            backgroundColorHover="var(--brand2)"
          >
            Adicionar campo para imagem da galeria
          </Button>
          <div className="div-button">
            <Button
              buttonSize="big"
              backgroundColor="var(--grey6)"
              backgroundColorHover="var(--grey4)"
              fontColor="var(--grey2)"
            >
              Cancelar
            </Button>
            <Button className="button-create" buttonSize="big" disabled>
              Criar anúncio
            </Button>
          </div>
        </StyledFormCreateAd>
      </StyledDivContent>
    </StyleBackgroundModal>
  );
};

export default ModalCreateAd;
