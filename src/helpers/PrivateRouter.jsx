// PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const token = localStorage.getItem("access_token");

  return token ? children : <Navigate to="/admin-login" />;
};

export default PrivateRouter;
