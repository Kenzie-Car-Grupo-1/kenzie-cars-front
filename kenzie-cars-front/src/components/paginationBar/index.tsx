import { Bar } from "./style";
import { Link } from "react-router-dom";
import Button from "../Button";
import { useCars } from "../../context/cars.context";

interface IPaginationBarProps {
  isVisibleFilter: boolean;
  setIsVisibleFilter: (value: boolean) => void;
}

const PaginationBar = ({
  isVisibleFilter,
  setIsVisibleFilter,
}: IPaginationBarProps) => {
  const {allAds, currentPage, setCurrentPage} = useCars();
  const totalPageNumber = Math.ceil(allAds / 12);

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
