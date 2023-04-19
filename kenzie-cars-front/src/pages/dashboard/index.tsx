import { useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/headers";
import ImageInitial from "../../components/imageInitial";
import CardList from "../../components/CardList";
import Filter from "../../components/filter";
import arrayFilter from "../../components/filter/database";
import Footer from "../../components/footer";
import PaginationBar from "../../components/paginationBar";
import { StyledDiv } from "./style";
import { useModal } from "../../context/modal.context";
import ModalCreateAd from "../../components/modals/modalCreateAd";

const Dashboard = () => {
  const [isVisibleFilter, setIsVisibleFilter] = useState(true);
  const { setOpenModalCreateAd, openModalCreateAd } = useModal();
  return (
    <>
      <Header />
      <ImageInitial />
      <StyledDiv>
        <Filter
          isVisibleFilter={isVisibleFilter}
          setIsVisibleFilter={setIsVisibleFilter}
          arrayFilter={arrayFilter}
        />
        <CardList />
      </StyledDiv>
      <PaginationBar
        isVisibleFilter={isVisibleFilter}
        setIsVisibleFilter={setIsVisibleFilter}
      />
      <Footer />
      <div>
        <button onClick={() => setOpenModalCreateAd(true)}>
          Mostrar Modal
        </button>
      </div>

      {openModalCreateAd && <ModalCreateAd />}
    </>
  );
};

export default Dashboard;
