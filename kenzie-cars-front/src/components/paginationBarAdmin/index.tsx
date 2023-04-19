import { useState } from "react";
import { items } from "../CardList/database";
import { Link } from "react-router-dom";
import { BarAdmin, StyledDivPages } from "./style";

const PaginationBarAdmin = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPageNumber = Math.ceil(items.length / 12);

    function addPage() {
        if (currentPage < totalPageNumber && currentPage >= 1) {
          setCurrentPage(currentPage + 1);
        }
      }
    
      function decreasePage() {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      }

    return (
        <BarAdmin>
            {totalPageNumber == 1 ? (
        <StyledDivPages>
          <p className="current-page">{currentPage}&nbsp;</p>
          <p className="next-page">de {totalPageNumber}&nbsp;</p>
        </StyledDivPages>
      ) : (
        <>
          <Link onClick={decreasePage} to={""}>
            {"<"} Anterior
          </Link>
          <StyledDivPages>
            <p className="current-page">&nbsp;{currentPage}&nbsp;</p>
            <p className="next-page">de {totalPageNumber}&nbsp;</p>
          </StyledDivPages>
          <Link onClick={addPage} to={""}>
            Seguinte {">"}
          </Link>
        </>
      )}
        </BarAdmin>
    )
}

export default PaginationBarAdmin