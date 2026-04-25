"use client";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { User, Settings, LogOut, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";
import { Avatar } from "./Avatar";
import { PageLoader } from "./Spinner";
import { ProtectedRoute } from "./ProtectedRoute";
import { formatDate } from "../lib/utils";

function DashboardContent() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">AuthApp</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => router.push("/profile")}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-2">Welcome back, {user?.name}!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
            <CardContent className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <User className="w-6 h-6" />
              </div>
              <div>
                <p className="text-blue-100 text-sm">User</p>
                <p className="text-xl font-bold">{user?.name}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
            <CardContent className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <p className="text-green-100 text-sm">Security</p>
                <p className="text-xl font-bold">Protected</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <p className="text-purple-100 text-sm">Account</p>
                <p className="text-xl font-bold">Active</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar fallback={user?.name} size="xl" />
                <div>
                  <p className="font-semibold text-lg">{user?.name}</p>
                  <p className="text-gray-500">{user?.email}</p>
                </div>
              </div>
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-500">Member Since</span>
                  <span className="font-medium">{user?.createdAt ? formatDate(user.createdAt) : "N/A"}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-500">User ID</span>
                  <span className="font-mono text-sm text-gray-600">{user?.id?.slice(-8)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <button
                onClick={() => router.push("/profile")}
                className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Edit Profile</span>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => router.push("/settings")}
                className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Account Settings</span>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-between p-4 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <LogOut className="w-5 h-5 text-red-600" />
                  <span className="font-medium text-red-600">Logout</span>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}

export default Dashboard;