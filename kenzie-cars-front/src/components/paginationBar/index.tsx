import { useState } from "react";
import { Bar } from "./style";
import { Link } from "react-router-dom";
import { items } from "../CardList/database";

const PaginationBar = () => {
  const [page, setPage] = useState(1);
  const pageNumber = Math.ceil(items.length / 12);

  function addPage(){
    if (page < pageNumber && page >= 1) {
      setPage(page + 1)
    }
  }

  function decreasePage(){
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <Bar>
      {pageNumber == 1 ? (
        <div className="div-pages">
          <p className="current-page">{page}&nbsp;</p>
          <p className="next-page">de {pageNumber}&nbsp;</p>
        </div>
      ) : (
        <>
          <Link onClick={decreasePage} to={""}>
          {"<"} Anterior
          </Link>
          <div className="div-pages">
            <p className="current-page">&nbsp;{page}&nbsp;</p>
            <p className="next-page">de {pageNumber}&nbsp;</p>
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
