import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard";

const Routers = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Routers;
