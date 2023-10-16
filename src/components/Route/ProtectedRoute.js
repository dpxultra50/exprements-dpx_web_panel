import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../User/layout/Loader";

const ProtectedRoute = ({ isAdmin, children }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading && loading === true) {
    return <Loader />;
  } else {
    if (isAuthenticated === false) {
      return <Navigate to="/login" />;
    }
    if (isAdmin === true && user.role !== "admin") {
      return <Navigate to="/login" />;
    }
    return children ? children : <Outlet />;
  }
};

export default ProtectedRoute;
