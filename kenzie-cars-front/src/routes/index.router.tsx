import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import DetailCar from "../pages/detailCar";
import Login from "../pages/login";
import ProfileViewAdmin from "../pages/profileViewAdmin";
import Register from "../pages/register";

const Routers = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:carId" element={<DetailCar />} />
      <Route path="/dashboard/:userId/ads" element={<ProfileViewAdmin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
