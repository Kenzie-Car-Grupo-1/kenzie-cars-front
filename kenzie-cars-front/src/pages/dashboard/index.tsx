import { useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/headers";
import ImageInitial from "../../components/imageInitial";
import CardList from "../../components/CardList";
import Filter from "../../components/filter";
import Footer from "../../components/Footer";
import PaginationBar from "../../components/paginationBar";
import { StyledDiv } from "./style";
import { useModal } from "../../context/modal.context";
import ModalCreateAd from "../../components/modals/modalCreateAd";

const Dashboard = () => {
  const [isVisibleFilter, setIsVisibleFilter] = useState(true);

  return (
    <>
      <Header />
      <ImageInitial />
      <StyledDiv>
        <Filter
          isVisibleFilter={isVisibleFilter}
          setIsVisibleFilter={setIsVisibleFilter}
        />
        <CardList />
      </StyledDiv>
      <PaginationBar
        isVisibleFilter={isVisibleFilter}
        setIsVisibleFilter={setIsVisibleFilter}
      />
      <Footer />
    </>
  );
};

export default Dashboard;
