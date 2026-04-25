"use client";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { PageLoader } from "./Spinner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token && !loading) {
      router.push("/login");
    }
  }, [loading, router]);

  if (loading) {
    return <PageLoader />;
  }

  if (!user) {
    return null;
  }

  return children;
};

export const GuestRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token && !loading) {
      router.push("/");
    }
  }, [loading, router]);

  if (loading) {
    return <PageLoader />;
  }

  if (user) {
    return null;
  }

  return children;
};