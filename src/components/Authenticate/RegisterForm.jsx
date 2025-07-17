import React, { useState } from "react";
import { InputItem } from "./InputItem";
import { SubmitBtn } from "./SubmitBtn";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthContext";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register, loading } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (value && errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle confirm password change
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    // Clear confirm password error when user starts typing
    if (value && errors.confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: "" }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Phone validation
    // const phoneRegex = /^[0-9]{10}$/;
    // if (!formData.phone.trim()) {
    //   newErrors.phone = "Phone number is required";
    // } else if (!phoneRegex.test(formData.phone.trim())) {
    //   newErrors.phone = "Phone number must be exactly 10 digits";
    // }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }

    // Confirm password validation
    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await register(formData);

      if (response.success) {
        toast.success(response.message || "Registration successful!");
        navigate("/login");
      } else {
        toast.error(response.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col gap-4 px-5 w-96 max-sm:w-full"
    >
      <h1 className="text-2xl py-2 font-semibold text-center">Register</h1>

      <InputItem
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        error={errors.name}
      />

      {/* <InputItem
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone number"
        error={errors.phone}
      /> */}

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

      <InputItem
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        placeholder="Confirm Password"
        error={errors.confirmPassword}
      />

      <SubmitBtn label="Register" onClick={handleRegister} loading={loading} />

      <div className="text-center flex gap-1 justify-center">
        <p className="text-[#797979]">Already have an account?</p>
        <Link to="/login" className="text-black underline">
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
