import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { StyledFilter } from "./style";

import { AnimatePresence } from "framer-motion";
import Button from "../Button";
import Icons from "../../service/icons";
import Input from "../input";
import { useCars } from "../../context/cars.context";

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
  const isFilterEnabled = useMediaQuery("(max-width: 1024px)");
  const { ads, setFilteredAds, fetchModelsAPI } = useCars();
  // const [isBrandsInitials, setBrandsInitials] = useState(brandsInitials);
  const [isModelsInitials, setModelsInitials] = useState(modelsInitials);
  // const [isColorsInitials, setColorsInitials] = useState(colorsInitials);
  // const [isYearsInitials, setYearsInitials] = useState(yearsInitials);
  // const [isFuelInitials, setFuelInitials] = useState(fuelInitials);
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

    if (Object.values(filters).every((value) => value === null)) {
      setFilteredAds(ads);
    } else {
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
          !ad.model
            .toLowerCase()
            .includes(queryParams.get("model")?.toLowerCase() ?? "")
        ) {
          return false;
        }

        // Verifica se o parâmetro de consulta 'fuel_type' está presente e se corresponde ao tipo de combustível do carro (case-insensitive)
        if (
          queryParams.has("fuel_type") &&
          ad.fuel_type.toLowerCase() !==
            queryParams.get("fuel_type")?.toLowerCase()
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
          if (queryParams.get("year") === "2015") {
            if (parseInt(ad.year) > 2015) {
              return false;
            }
          } else {
            return false;
          }
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
      setFilteredAds(filteredAds);
    }
  }, [filters, ads]);

  useEffect(() => {
    setIsVisibleFilter(!isFilterEnabled);
  }, [isFilterEnabled, setIsVisibleFilter]);

  const handleFilterClick = async (value: string, filter: string) => {
    value = value.replace(/\s/g, "").replace("<", "");
    const valueUp = value.charAt(0).toUpperCase() + value.slice(1);

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
          <Button  className="btn-filter" buttonSize="big" onClick={() => setFilters(initialFilters)}>
            Limpar filtros
          </Button>
        )}
      </StyledFilter>
    </AnimatePresence>
  );
};

export default Filter;
