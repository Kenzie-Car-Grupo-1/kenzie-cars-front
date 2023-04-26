import { Bar } from "./style";
import { Link } from "react-router-dom";
import Button from "../Button";
import { useCars } from "../../context/cars.context";
import { useEffect, useState } from "react";

interface IPaginationBarProps {
  isVisibleFilter: boolean;
  setIsVisibleFilter: (value: boolean) => void;
}

const PaginationBar = ({
  isVisibleFilter,
  setIsVisibleFilter,
}: IPaginationBarProps) => {
  const { allAds, currentPage, setCurrentPage, filteredAds, isFilterActive } =
    useCars();
  const adsCount = isFilterActive ? filteredAds.length : allAds;
  // const allAds = Math.ceil(adsCount / 12);

  const addPage = () => {
    if (currentPage < allAds && currentPage >= 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const decreasePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Bar>
      <Button
        buttonSize="big"
        backgroundColor="var(--brand2)"
        fontColor="white"
        onClick={() => setIsVisibleFilter(!isVisibleFilter)}
      >
        Filtros
      </Button>
      {allAds === 1 ? (
        <div className="div-pages">
          <p className="current-page">{currentPage}&nbsp;</p>
          <p className="next-page">de {allAds}&nbsp;</p>
        </div>
      ) : (
        <>
          <Link onClick={decreasePage} to={""}>
            {"<"} Anterior
          </Link>
          <div className="div-pages">
            <p className="current-page">&nbsp;{currentPage}&nbsp;</p>
            <p className="next-page">de {allAds}&nbsp;</p>
          </div>
          <Link onClick={addPage} to={""}>
            Seguinte {">"}
          </Link>
        </>
      )}
    </Bar>
  );
};

export default PaginationBar;
