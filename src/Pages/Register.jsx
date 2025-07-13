import { Heading } from "@/components/Authenticate/Heading";
import RegisterForm from "@/components/Authenticate/RegisterForm";
import { Navigate } from "react-router-dom";

const Register = () => {
//   const { user } = useAuth();

//   if (user) return <Navigate to="/" replace />;
  return (
    <div className="flex flex-col gap-20 h-screen items-center">
      <Heading />
      <RegisterForm />
    </div>
  );
};

export default Register;
