import { Navigate } from "react-router-dom";
// import { useAuth } from "@/context/AuthContext";

export const ProtectedRoute = ({ children, requiredRoles = [] }) => {
  //   const { user, loading } = useAuth();
  const loading = false;
  const user = {};

  if (loading) {
    return <LoadingPage />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRoles.length > 0 && !requiredRoles.includes(user?.role)) {
    if (user?.role === "admin") return <Navigate to="/admin" replace />;
    return <Unauthorized />;
  }

  return children;
};
