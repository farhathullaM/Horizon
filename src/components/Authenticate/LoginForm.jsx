import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { InputItem } from "./InputItem";
import { SubmitBtn } from "./SubmitBtn";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    login(formData);
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-4 px-5 w-96 max-sm:w-full"
    >
      <h1 className="text-2xl font-semibold text-center py-2">Login</h1>

      <InputItem
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        error={errors.email}
      />

      <InputItem
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        error={errors.password}
      />

      <SubmitBtn
        label="Login"
        type="submit"
        onClick={handleLogin}
        loading={loading}
      />

      <div className="text-center flex gap-1">
        <p className="text-[#797979]">Don't have an account?</p>
        <Link to="/register" className="text-black underline">
          Register
        </Link>
      </div>
    </form>
  );
};
