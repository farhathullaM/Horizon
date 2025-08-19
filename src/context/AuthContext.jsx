import apiClient from "@/lib/apiClient";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch user details using stored token
  const fetchUser = async () => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const res = await apiClient.get("/user/me");
      setUser(res.data);
    } catch (err) {
      console.error("Auth check failed:", err);
      setUser(null);
      localStorage.removeItem("jwt");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // ✅ Login: store token in localStorage, then fetch user
  const login = async (formData) => {
    setLoading(true);
    try {
      const res = await apiClient.post("/user/login", formData, {
        headers: { "Content-Type": "application/json" },
      });

      // Save JWT to localStorage
      localStorage.setItem("jwt", res.data.token);

      // Get user details
      await fetchUser();

      toast.success("Logged in successfully");
      return { success: true };
    } catch (e) {
      toast.error(
        e.response?.data?.message || e.message || "Invalid Credentials"
      );
      return {
        success: false,
        message: e.response?.data?.message,
      };
    } finally {
      setLoading(false);
    }
  };

  // ✅ Register: backend returns token, store it
  const register = async (formData) => {
    setLoading(true);
    try {
      const res = await apiClient.post("/user/register", formData, {
        headers: { "Content-Type": "application/json" },
      });

      localStorage.setItem("jwt", res.data.token);
      await fetchUser();

      return { success: true, message: "Successfully Registered" };
    } catch (e) {
      return {
        success: false,
        message: e.response?.data?.message || e.message,
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    localStorage.removeItem("jwt");
    setUser(null);
    toast.info("Logged out successfully");
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
