import { useState } from "react";
import Button from "../../components/Button";
import Filter from "../../components/Filter";
import arrayFilter from "../../components/Filter/database";
import Footer from "../../components/Footer";
import Header from "../../components/headers";

const Dashboard = () => {
  const [isVisibleFilter, setIsVisibleFilter] = useState(false);
  return (
    <>
      <Header />
      <Filter
        isVisibleFilter={isVisibleFilter}
        setIsVisibleFilter={setIsVisibleFilter}
        arrayFilter={arrayFilter}
      />
      <Button
        buttonSize="big"
        backgroundColor="var(--brand2)"
        fontColor="white"
        onClick={() => setIsVisibleFilter(true)}
      >
        Filtros
      </Button>
      <Footer />
    </>
  );
};

export default Dashboard;
