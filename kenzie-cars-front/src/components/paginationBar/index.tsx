import { useEffect, useState } from "react";
import { Bar } from "./style";
import { Link } from "react-router-dom";
import { items } from "../CardList/database";
import Button from "../Button";

const PaginationBar = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisibleFilter, setIsVisibleFilter] = useState(true);
  const totalPageNumber = Math.ceil(items.length / 12);

  function addPage(){
    if (currentPage < totalPageNumber && currentPage >= 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  function decreasePage(){
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // useEffect((
    
  // ) => {}, [])

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
      {totalPageNumber == 1 ? (
        <div className="div-pages">
          <p className="current-page">{currentPage}&nbsp;</p>
          <p className="next-page">de {totalPageNumber}&nbsp;</p>
        </div>
      ) : (
        <>
          <Link onClick={decreasePage} to={""}>
          {"<"} Anterior
          </Link>
          <div className="div-pages">
            <p className="current-page">&nbsp;{currentPage}&nbsp;</p>
            <p className="next-page">de {totalPageNumber}&nbsp;</p>
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
