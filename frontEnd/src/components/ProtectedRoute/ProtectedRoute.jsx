import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("authToken");

  // Si le token existe, on laisse passer via <Outlet />
  // Sinon, on redirige vers la page de connexion.
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
