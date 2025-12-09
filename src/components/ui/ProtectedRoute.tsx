import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const token = localStorage.getItem("AuthToken");

  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  return <>{children}</>;
}

