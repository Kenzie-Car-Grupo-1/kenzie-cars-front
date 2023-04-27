import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { StyledFilter } from "./style";

import { AnimatePresence } from "framer-motion";
import Button from "../Button";
import Icons from "../../service/icons";
import Input from "../input";
import { ICar, useCars } from "../../context/cars.context";

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
  "< 2015",
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
  const isFilterEnabled = useMediaQuery("(max-width: 1300px)");
  const {
    ads,
    setFilteredAds,
    ListAdsFiltered,
    fetchModelsAPI,
    setIsFilterActive,
    setCurrentPage,
  } = useCars();
  const [isModelsInitials, setModelsInitials] = useState(modelsInitials);
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    const queryParams = new URLSearchParams();

    for (const [key, value] of Object.entries(filters)) {
      if (value !== null) {
        queryParams.append(key, value);
      }
    }

    const queryString = queryParams.toString();
    const newUrl = `${window.location.pathname}?${queryString}`;

    window.history.replaceState({}, "", newUrl);

    ListAdsFiltered(queryString);
  }, [filters, ads]);

  useEffect(() => {
    setIsVisibleFilter(!isFilterEnabled);
  }, [isFilterEnabled, setIsVisibleFilter]);

  const handleFilterClick = async (value: string, filter: string) => {
    value = value.replace(/\s/g, "").replace("<", "");
    const valueUp = value.charAt(0).toUpperCase() + value.slice(1);

    setCurrentPage(1);
    setFilters({ ...filters, [filter]: valueUp });

    if (filter == "brand") {
      const models = await fetchModelsAPI(value);
      const nameModels = models.map((model) => model.name.split(" ")[0]);
      const initialsCapitalized = nameModels.map(
        (initial) => initial.charAt(0).toUpperCase() + initial.slice(1)
      );
      setModelsInitials([...new Set(initialsCapitalized)]);
    }
  };

  const hasActiveFilter = Object.values(filters).some(
    (value) => value !== null
  );

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
            {!filters.brand ? (
              brandsInitials.map((brand, index) => (
                <li key={index}>
                  <button onClick={() => handleFilterClick(brand, "brand")}>
                    {brand}
                  </button>
                </li>
              ))
            ) : (
              <li>
                <button>{filters.brand}</button>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h2>Modelo</h2>
          <ul>
            {!filters.model ? (
              isModelsInitials.map((model, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      handleFilterClick(model.toLocaleLowerCase(), "model")
                    }
                  >
                    {model}
                  </button>
                </li>
              ))
            ) : (
              <li>
                <button>{filters.model}</button>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h2>Cor</h2>
          <ul>
            {!filters.color ? (
              colorsInitials.map((color, index) => (
                <li key={index}>
                  <button onClick={() => handleFilterClick(color, "color")}>
                    {color}
                  </button>
                </li>
              ))
            ) : (
              <li>
                <button>{filters.color}</button>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h2>Ano</h2>
          <ul>
            {!filters.year ? (
              yearsInitials.map((year, index) => (
                <li key={index}>
                  <button onClick={() => handleFilterClick(year, "year")}>
                    {year}
                  </button>
                </li>
              ))
            ) : (
              <li>
                <button>{filters.year}</button>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h2>Combustível</h2>
          <ul>
            {!filters.fuel_type ? (
              fuelInitials.map((fuel_type, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleFilterClick(fuel_type, "fuel_type")}
                  >
                    {fuel_type}
                  </button>
                </li>
              ))
            ) : (
              <li>
                <button>{filters.fuel_type}</button>
              </li>
            )}
          </ul>
        </div>
        <h2>Km</h2>
        <div className="div-km">
          <Input
            backgroundColor="var(--grey5)"
            placeholder="Mínimo"
            onChange={(event) =>
              handleFilterClick(event.currentTarget.value, "min_kms")
            }
          />
          <Input
            backgroundColor="var(--grey5)"
            placeholder="Máximo"
            onChange={(event) =>
              handleFilterClick(event.currentTarget.value, "max_kms")
            }
          />
        </div>
        <h2>Preço</h2>
        <div className="div-km">
          <Input
            backgroundColor="var(--grey5)"
            placeholder="Mínimo"
            onChange={(event) =>
              handleFilterClick(event.currentTarget.value, "min_price")
            }
          />
          <Input
            backgroundColor="var(--grey5)"
            placeholder="Máximo"
            onChange={(event) =>
              handleFilterClick(event.currentTarget.value, "max_price")
            }
          />
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
        {hasActiveFilter && (
          <Button
            className="btn-filter"
            buttonSize="big"
            onClick={() => {
              setFilters(initialFilters);
              setIsFilterActive(false);
              setModelsInitials(modelsInitials);
              setCurrentPage(1);
            }}
          >
            Limpar filtros
          </Button>
        )}
      </StyledFilter>
    </AnimatePresence>
  );
};

export default Filter;
