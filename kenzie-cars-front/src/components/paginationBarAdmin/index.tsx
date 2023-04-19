const PaginationBarAdmin = () => {
    
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

    return ()
}

export default PaginationBarAdmin