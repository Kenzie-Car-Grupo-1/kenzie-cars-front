import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import DetailCar from "../pages/detailCar";
import Login from "../pages/login";
import ProfileViewAdmin from "../pages/profileViewAdmin";
import Register from "../pages/register";
import ResetPassword from "../pages/resetPassword";
import ResetPasswordToken from "../pages/resetPasswordToken";
import ProfileViewUser from "../pages/profileViewUser";

const Routers = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:carId" element={<DetailCar />} />
      <Route path="/dashboard/:userId/ads" element={<ProfileViewAdmin />} />
      <Route path="/dashboard/salesman/:salesmanId" element={<ProfileViewUser />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login/reset" element={<ResetPassword />} />
      <Route path="/login/reset/:tokenReset" element={<ResetPasswordToken />} />
    </Routes>
  );
};

export default Routers;
