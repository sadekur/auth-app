"use client";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { User, Mail, Calendar, Save, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/Card";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Avatar } from "../../components/Avatar";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { PageLoader } from "../../components/Spinner";
import { formatDate } from "../../lib/utils";
import { NAME_MIN_LENGTH, NAME_MAX_LENGTH } from "../../lib/constants";

function ProfileContent() {
  const { user, loading, updateProfile } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  if (loading) {
    return <PageLoader />;
  }

  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < NAME_MIN_LENGTH || formData.name.length > NAME_MAX_LENGTH) {
      newErrors.name = `Name must be ${NAME_MIN_LENGTH}-${NAME_MAX_LENGTH} characters`;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setSaving(true);
    const result = await updateProfile(formData);
    setSaving(false);
    
    if (result.success) {
      toast.success("Profile updated successfully!");
    } else {
      toast.error(result.error || "Update failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
          <p className="text-gray-500 mt-2">Manage your account information</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <Avatar fallback={user?.name} size="xl" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{user?.name}</p>
                  <p className="text-gray-500">{user?.email}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>Member since {user?.createdAt ? formatDate(user.createdAt) : "N/A"}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-[38px] h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    name="name"
                    label="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    className="pl-10"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-[38px] h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    name="email"
                    label="Email Address"
                    value={formData.email}
                    className="pl-10"
                    disabled
                  />
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Email cannot be changed
                  </p>
                </div>
              </div>

              <Button type="submit" loading={saving} className="w-full">
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">User ID</span>
                <span className="font-mono text-sm text-gray-600">{user?.id?.slice(-12)}</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-gray-500">Account Status</span>
                <span className="text-green-600 font-medium">Active</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-500">Last Login</span>
                <span className="text-gray-600">{user?.lastLogin ? formatDate(user.lastLogin) : "N/A"}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  );
}

export default ProfilePage;