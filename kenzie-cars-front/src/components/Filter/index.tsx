import { useState } from "react";
import { StyledFilter } from "./style";
import { AnimatePresence } from "framer-motion";
import Button from "../Button";
import Icons from "../../service/icons";

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
  return (
    <AnimatePresence>
      <StyledFilter
        style={{ width: "100%", height: "100%" }}
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
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <h2>Km</h2>
        <div className="div-km">
          <Button
            buttonSize="medium"
            backgroundColor="var(--grey5)"
            fontColor="var(--grey3)"
          >
            Mínimo
          </Button>
          <Button
            buttonSize="medium"
            fontColor="var(--grey3)"
            backgroundColor="var(--grey5)"
          >
            Máximo
          </Button>
        </div>
        <h2>Preço</h2>
        <div className="div-km">
          <Button
            buttonSize="medium"
            fontColor="var(--grey3)"
            backgroundColor="var(--grey5)"
          >
            Mínimo
          </Button>
          <Button
            buttonSize="medium"
            fontColor="var(--grey3)"
            backgroundColor="var(--grey5)"
          >
            Máximo
          </Button>
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
