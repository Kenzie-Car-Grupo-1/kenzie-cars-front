import Button from "../../components/Button";
import Filter from "../../components/Filter";
import arrayFilter from "../../components/Filter/database";
import Footer from "../../components/Footer";



const Dashboard = () => {
  // return <h1>Olá mundo</h1>;
  return <Filter arrayFilter={arrayFilter} />;
};

export default Dashboard;
