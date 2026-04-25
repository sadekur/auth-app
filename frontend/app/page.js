"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, Settings, LogOut, ChevronRight, Shield, Activity } from "lucide-react";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useAuth } from "../context/AuthContext";
import { Card, CardHeader, CardTitle, CardContent } from "../components/Card";
import { Button } from "../components/Button";
import { PageLoader } from "../components/Spinner";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { formatDate } from "../lib/utils";

function DashboardContent() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token && !loading) {
      router.push("/login");
    }
  }, [loading, router]);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">AuthApp</span>
            </div>
            <Button variant="danger" onClick={handleLogout} className="text-sm">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
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
                <p className="text-blue-100 text-sm">Welcome</p>
                <p className="text-xl font-bold">{user?.name}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
            <CardContent className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <p className="text-green-100 text-sm">Status</p>
                <p className="text-xl font-bold">Active</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <p className="text-purple-100 text-sm">Security</p>
                <p className="text-xl font-bold">Protected</p>
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
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-gray-500 flex items-center gap-2">
                  <User className="w-4 h-4" /> Name
                </span>
                <span className="font-medium">{user?.name}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-gray-500 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> Email
                </span>
                <span className="font-medium">{user?.email}</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-500 flex items-center gap-2">
                  <Shield className="w-4 h-4" /> Member Since
                </span>
                <span className="font-medium">{user?.createdAt ? formatDate(user.createdAt) : "N/A"}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-between" 
                onClick={() => router.push("/profile")}
              >
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" /> Edit Profile
                </span>
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-between" 
                onClick={() => router.push("/settings")}
              >
                <span className="flex items-center gap-2">
                  <Settings className="w-4 h-4" /> Settings
                </span>
                <ChevronRight className="w-4 h-4" />
              </Button>
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