import apiClient from "@/lib/apiClient";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Get user from server via cookie
  const fetchUser = async () => {
    try {
      const res = await apiClient.get("/user/me");
      console.log(res.data);
      setUser(res.data);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // ✅ Login: backend sets cookie, then refetch user
  const login = async (formData) => {
    setLoading(true);
    try {
      const res = await apiClient.post("/user/login", formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("userlogin");
      await fetchUser();
      toast.success(res.data.message);
      return { success: true };
    } catch (e) {
      toast.error(e.response?.data?.message);
      return {
        success: false,
        message: e.response?.data?.message,
      };
    } finally {
      setLoading(false);
    }
  };

  // ✅ Register: backend sets cookie, then refetch user
  const register = async (formData) => {
    setLoading(true);
    try {
      await apiClient.post("/user/register", formData, {
        headers: { "Content-Type": "application/json" },
      });
      // toast.success("Successfully Registered");
      return { success: true, message: "Successfully Registered" };
    } catch (e) {
      // toast.error(e.response?.data?.message);
      return {
        success: false,
        message: e.response?.data?.message || e.message,
      };
    } finally {
      setLoading(false);
    }
  };

  // ✅ Logout: call backend to clear cookie
  const logout = async () => {
    try {
      await apiClient.post("/user/logout");
      setUser(null);
    } catch (e) {
      console.error("Logout failed:", e);
    }
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
