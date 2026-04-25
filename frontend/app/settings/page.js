"use client";
import { useState } from "react";
import { Lock, Eye, EyeOff, Save, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "../../context/AuthContext";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/Card";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Alert } from "../../components/Alert";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { PageLoader } from "../../components/Spinner";
import { PASSWORD_MIN_LENGTH } from "../../lib/constants";

function SettingsContent() {
  const { user, loading, changePassword } = useAuth();
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  if (loading) {
    return <PageLoader />;
  }

  const validate = () => {
    const newErrors = {};
    if (!passwordData.currentPassword) {
      newErrors.currentPassword = "Current password is required";
    }
    if (!passwordData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (passwordData.newPassword.length < PASSWORD_MIN_LENGTH) {
      newErrors.newPassword = `Password must be at least ${PASSWORD_MIN_LENGTH} characters`;
    }
    if (!passwordData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your new password";
    } else if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const togglePassword = (field) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setSaving(true);
    const result = await changePassword(passwordData.currentPassword, passwordData.newPassword);
    setSaving(false);
    
    if (result.success) {
      toast.success("Password changed successfully!");
      setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } else {
      toast.error(result.error || "Password change failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-500 mt-2">Manage your account security</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Change Password
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Alert variant="warning">
                <AlertTriangle className="w-4 h-4" />
                <span>Make sure to use a strong, unique password that you don't use elsewhere.</span>
              </Alert>

              <div className="relative">
                <Lock className="absolute left-3 top-[38px] h-5 w-5 text-gray-400" />
                <Input
                  type={showPasswords.current ? "text" : "password"}
                  name="currentPassword"
                  label="Current Password"
                  value={passwordData.currentPassword}
                  onChange={handleChange}
                  error={errors.currentPassword}
                  className="pl-10 pr-10"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => togglePassword("current")}
                  className="absolute right-3 top-[38px] text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.current ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-[38px] h-5 w-5 text-gray-400" />
                <Input
                  type={showPasswords.new ? "text" : "password"}
                  name="newPassword"
                  label="New Password"
                  value={passwordData.newPassword}
                  onChange={handleChange}
                  error={errors.newPassword}
                  className="pl-10 pr-10"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => togglePassword("new")}
                  className="absolute right-3 top-[38px] text-gray-400 hover:text-gray-600"
                >
                  {showPasswords.new ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-[38px] h-5 w-5 text-gray-400" />
                <Input
                  type={showPasswords.confirm ? "text" : "password"}
                  name="confirmPassword"
                  label="Confirm New Password"
                  value={passwordData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  className="pl-10"
                  autoComplete="new-password"
                />
              </div>

              <Button type="submit" loading={saving} className="w-full">
                <Save className="w-4 h-4" />
                Update Password
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Info</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-500">Email</span>
                <span className="font-medium">{user?.email}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-500">Account ID</span>
                <span className="font-mono text-sm">{user?.id?.slice(-8)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function SettingsPage() {
  return (
    <ProtectedRoute>
      <SettingsContent />
    </ProtectedRoute>
  );
}

export default SettingsPage;