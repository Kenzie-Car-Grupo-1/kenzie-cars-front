import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { StyledFilter } from "./style";

import { AnimatePresence } from "framer-motion";
import Button from "../Button";
import Icons from "../../service/icons";
import Input from "../input";

interface IFilterProps {
  isVisibleFilter: boolean;
  setIsVisibleFilter: (value: boolean) => void;
}

const brandsInitials = [
  "Citroën",
  "Chevrolet",
  "General Motors",
  "Fiat",
  "Ford",
  "Honda",
  "Hyundai",
  "Nissan",
  "Mercedes",
  "Renault",
  "Peugeot",
  "Toyota",
  "Volkswagen",
];

const modelsInitials = [
  "Civic",
  "Corolla",
  "Cruze",
  "Fit",
  "Gol",
  "Ka",
  "Onix",
  "Pulse",
];

const colorsInitials = [
  "Amarelo",
  "Azul",
  "Branco",
  "Cinza",
  "Prata",
  "Preto",
  "Verde",
  "Vermelho",
];

const yearsInitials = [
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
];

const fuelInitials = [
  "Diesel",
  "Elétrico",
  "Etanol",
  "Flex",
  "Gasolina",
  "GNV",
  "Híbrido",
];

const initialFilters = {
  brand: null,
  model: null,
  color: null,
  year: null,
  fuel_type: null,
  min_kms: null,
  max_kms: null,
  min_price: null,
  max_price: null,
};

const Filter = ({ isVisibleFilter, setIsVisibleFilter }: IFilterProps) => {
  const isFilterEnabled = useMediaQuery("(max-width: 1024px)");
  const [isBrandsInitials, setBrandsInitials] = useState(brandsInitials);
  const [isModelsInitials, setModelsInitials] = useState(modelsInitials);
  const [isColorsInitials, setColorsInitials] = useState(colorsInitials);
  const [isYearsInitials, setYearsInitials] = useState(yearsInitials);
  const [isFuelInitials, setFuelInitials] = useState(fuelInitials);

  const [filters, setFilters] = useState(initialFilters);

  // função para atualizar o estado de um filtro específico
  const handleFilterChange = (section: string, value: string) => {
    // atualiza o estado da seção selecionada
    setFilters((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  };

  useEffect(() => {
    setIsVisibleFilter(!isFilterEnabled);
  }, [isFilterEnabled, setIsVisibleFilter]);

  return (
    <AnimatePresence>
      <StyledFilter
        initial={{ x: "-120%" }}
        animate={{ x: isVisibleFilter ? 0 : "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <div className="div-filter">
          <span>Filtro</span>
          <button onClick={() => setIsVisibleFilter(!isVisibleFilter)}>
            {<Icons.Close color="var(--grey4)" />}
          </button>
        </div>
        <div>
          <h2>Marca</h2>
          <ul>
            {!initialFilters.brand ? (
              brandsInitials.map((brand, index) => (
                <li key={index}>
                  <button>{brand}</button>
                </li>
              ))
            ) : (
              <li>
                <button>{initialFilters.brand}</button>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h2>Modelo</h2>
          <ul>
            {!initialFilters.model ? (
              modelsInitials.map((brand, index) => (
                <li key={index}>
                  <button>{brand}</button>
                </li>
              ))
            ) : (
              <li>
                <button>{initialFilters.model}</button>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h2>Cor</h2>
          <ul>
            {!initialFilters.color ? (
              colorsInitials.map((brand, index) => (
                <li key={index}>
                  <button>{brand}</button>
                </li>
              ))
            ) : (
              <li>
                <button>{initialFilters.color}</button>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h2>Ano</h2>
          <ul>
            {!initialFilters.year ? (
              yearsInitials.map((brand, index) => (
                <li key={index}>
                  <button>{brand}</button>
                </li>
              ))
            ) : (
              <li>
                <button>{initialFilters.year}</button>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h2>Combustível</h2>
          <ul>
            {!initialFilters.fuel_type ? (
              fuelInitials.map((brand, index) => (
                <li key={index}>
                  <button>{brand}</button>
                </li>
              ))
            ) : (
              <li>
                <button>{initialFilters.fuel_type}</button>
              </li>
            )}
          </ul>
        </div>
        <h2>Km</h2>
        <div className="div-km">
          <Input backgroundColor="var(--grey5)" placeholder="Mínimo" />
          <Input backgroundColor="var(--grey5)" placeholder="Máximo" />
        </div>
        <h2>Preço</h2>
        <div className="div-km">
          <Input backgroundColor="var(--grey5)" placeholder="Mínimo" />
          <Input backgroundColor="var(--grey5)" placeholder="Máximo" />
        </div>
        <Button
          className="button"
          buttonSize="big"
          backgroundColor="var(--brand2)"
          fontColor="white"
          onClick={() => setIsVisibleFilter(false)}
        >
          Ver anúncios
        </Button>
      </StyledFilter>
    </AnimatePresence>
  );
};

export default Filter;
