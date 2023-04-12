import { useState } from "react";
import { Bar } from "./style";
import { Link } from "react-router-dom";
import { items } from "../CardList/database";

const PaginationBar = () => {
  const [page, setPage] = useState(1)
  const pageNumber = Math.round(items.length / 12)

  return (
    <Bar>
      {page == 1 ? (
        <>
          <div className="div-pages">
            <p>{page}&nbsp;</p>
            <p>de {pageNumber}&nbsp;</p>
          </div>
          <Link onClick={() => setPage(page + 1)} to={""}>Seguinte</Link>
        </>
      ) : (
        <>
          <Link onClick={() => setPage(page - 1)} to={""}>Anterior</Link>
          <div className="div-pages">
            <p>&nbsp;{page}&nbsp;</p>
            <p>de {pageNumber}&nbsp;</p>
          </div>
          <Link onClick={() => setPage(page + 1)} to={""}>Seguinte</Link>
        </>
      )}
    </Bar>
  )
};

export default PaginationBar;
function round(arg0: number) {
  throw new Error("Function not implemented.");
}

