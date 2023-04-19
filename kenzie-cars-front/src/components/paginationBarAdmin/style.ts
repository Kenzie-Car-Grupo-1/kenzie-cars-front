import { Bar } from './../paginationBar/style';

const PaginationBarAdmin = () => {
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

    )
    // {totalPageNumber == 1 ? (
    //         <Bar>
    //       <div className="div-pages">
    //         <p className="current-page">{currentPage}&nbsp;</p>
    //         <p className="next-page">de {totalPageNumber}&nbsp;</p>
    //       </div>
    //     ) : (
    //       <>
    //         <Link onClick={decreasePage} to={""}>
    //           {"<"} Anterior
    //         </Link>
    //         <div className="div-pages">
    //           <p className="current-page">&nbsp;{currentPage}&nbsp;</p>
    //           <p className="next-page">de {totalPageNumber}&nbsp;</p>
    //         </div>
    //         <Link onClick={addPage} to={""}>
    //           Seguinte {">"}
    //         </Link>
    //       </>
    //       </Bar>
    //     )}
    // );
  };
  
  
  export default PaginationBarAdmin;