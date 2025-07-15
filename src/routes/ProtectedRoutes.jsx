import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Login from "@/Pages/Login";
import Unauthorized from "@/Pages/Error/Unauthorized";

export const ProtectedRoute = ({ children, requiredRoles = [] }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Login />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRoles.length > 0 && !requiredRoles.includes(user?.role)) {
    if (user?.role === "admin" || user?.role === "super_admin")
      return <Navigate to="/admin" replace />;
    return <Unauthorized />;
  }

  return children;
};
