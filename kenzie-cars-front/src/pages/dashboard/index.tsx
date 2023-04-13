import { useState } from "react";
import Button from "../../components/Button";
import Filter from "../../components/Filter";
import arrayFilter from "../../components/Filter/database"
import Footer from "../../components/Footer";
import Header from "../../components/headers";
import ImageInitial from "../../components/imageInitial";
import CardList from "../../components/CardList";
import PaginationBar from "../../components/paginationBar";

const Dashboard = () => {
  const [isVisibleFilter, setIsVisibleFilter] = useState(true);
  return (
    <>
      <Header />
      <ImageInitial />
      <CardList />
      <Filter
        isVisibleFilter={isVisibleFilter}
        setIsVisibleFilter={setIsVisibleFilter}
        arrayFilter={arrayFilter}
      />
      {/* <Button
        buttonSize="big"
        backgroundColor="var(--brand2)"
        fontColor="white"
        onClick={() => setIsVisibleFilter(!isVisibleFilter)}
      >
        Filtros
      </Button> */}
      <PaginationBar />
      <Footer />
    </>
  );
};

export default Dashboard;
