// import { useAuth } from "@/context/AuthContext";
import { Heading } from "@/components/Authenticate/Heading";
import { LoginForm } from "@/components/Authenticate/LoginForm";
import { Navigate } from "react-router-dom";

const Login = () => {
//   const { user } = useAuth();
//   if (user) return <Navigate to="/" replace />;
  return (
    <div className="flex flex-col gap-40 h-screen items-center">
      <Heading />
      <LoginForm />
    </div>
  );
};

export default Login;
