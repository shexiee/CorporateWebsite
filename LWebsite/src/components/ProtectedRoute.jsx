import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/admin-login" />;
  }
  return children;
}
