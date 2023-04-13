import { useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/headers";
import ImageInitial from "../../components/imageInitial";
import CardList from "../../components/CardList";
import Filter from "../../components/Filter";
import arrayFilter from "../../components/Filter/database";
import Footer from "../../components/Footer";
import PaginationBar from "../../components/paginationBar";
import { StyledDiv } from "./style";

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
          arrayFilter={arrayFilter}
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
