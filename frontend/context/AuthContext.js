"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  const api = axios.create({
    baseURL: API_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });

  api.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        Cookies.remove("token");
        Cookies.remove("user");
        setUser(null);
        router.push("/login");
      }
      return Promise.reject(error);
    }
  );

  const checkAuth = useCallback(async () => {
    try {
      const token = Cookies.get("token");
      if (token) {
        const userData = Cookies.get("user");
        if (userData) {
          setUser(JSON.parse(userData));
        }
        const res = await api.get("/auth/me");
        setUser(res.data.user);
        Cookies.set("user", JSON.stringify(res.data.user), { expires: 7 });
      }
    } catch (err) {
      Cookies.remove("token");
      Cookies.remove("user");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, [api, router]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = async (email, password) => {
    setError(null);
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, password });
      Cookies.set("token", res.data.token, { expires: 7 });
      Cookies.set("user", JSON.stringify(res.data.user), { expires: 7 });
      setUser(res.data.user);
      return { success: true };
    } catch (err) {
      const message = err.response?.data?.message || "Login failed";
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    setError(null);
    setLoading(true);
    try {
      const res = await api.post("/auth/register", { name, email, password });
      Cookies.set("token", res.data.token, { expires: 7 });
      Cookies.set("user", JSON.stringify(res.data.user), { expires: 7 });
      setUser(res.data.user);
      return { success: true };
    } catch (err) {
      const message = err.response?.data?.message || "Registration failed";
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    setUser(null);
    router.push("/login");
  };

  const updateProfile = async (data) => {
    setError(null);
    try {
      const res = await api.put("/users/profile", data);
      setUser(res.data.user);
      Cookies.set("user", JSON.stringify(res.data.user), { expires: 7 });
      return { success: true };
    } catch (err) {
      const message = err.response?.data?.message || "Update failed";
      setError(message);
      return { success: false, error: message };
    }
  };

  const changePassword = async (currentPassword, newPassword) => {
    setError(null);
    try {
      await api.put("/users/password", { currentPassword, newPassword });
      return { success: true };
    } catch (err) {
      const message = err.response?.data?.message || "Password change failed";
      setError(message);
      return { success: false, error: message };
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    updateProfile,
    changePassword,
    checkAuth,
    api,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};