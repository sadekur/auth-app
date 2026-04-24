"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");
    const userData = Cookies.get("user");
    if (!token) {
      router.push("/login");
    } else {
      setUser(userData ? JSON.parse(userData) : null);
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    router.push("/login");
  };

  if (loading) return null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="mb-4 text-4xl font-bold">Dashboard</h1>
      {user && (
        <p className="mb-8 text-lg text-gray-600">Welcome, {user.name}!</p>
      )}
      <button
        onClick={handleLogout}
        className="rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}