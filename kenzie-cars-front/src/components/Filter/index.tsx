import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { StyledFilter } from "./style";

import { AnimatePresence } from "framer-motion";
import Button from "../Button";
import Icons from "../../service/icons";
import Input from "../input";

interface IFilterProps {
  arrayFilter: {
    title: string;
    items: string[];
  }[];
  isVisibleFilter: boolean;
  setIsVisibleFilter: (value: boolean) => void;
}

const Filter = ({
  arrayFilter,
  isVisibleFilter,
  setIsVisibleFilter,
}: IFilterProps) => {
  const isFilterEnabled = useMediaQuery("(max-width: 760px)");

  useEffect(() => {
    setIsVisibleFilter(!isFilterEnabled);
  }, [isFilterEnabled, setIsVisibleFilter]);

  return (
    <AnimatePresence>
      <StyledFilter
        initial={{ x: "-100%" }}
        animate={{ x: isVisibleFilter ? 0 : "-100%" }}
        transition={{ duration: 0.5 }}
      >
        <div className="div-filter">
          <span>Filtro</span>
          <button onClick={() => setIsVisibleFilter(!isVisibleFilter)}>
            {<Icons.Close color="var(--grey4)" />}
          </button>
        </div>
        {arrayFilter.map((filter, index) => (
          <div key={index}>
            <h2>{filter.title}</h2>
            <ul>
              {filter.items.map((item, index) => (
                <li key={index}>
                  <button>{item}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
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
