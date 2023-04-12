import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import DetailCar from "../pages/detailCar";

const Routers = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:carId" element={<DetailCar />} />
    </Routes>
  );
};

export default Routers;
