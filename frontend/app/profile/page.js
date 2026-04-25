"use client";
import { useState } from "react";
import { User, Mail, Calendar, Save } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "../../context/AuthContext";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/Card";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { PageLoader } from "../../components/Spinner";
import { formatDate } from "../../lib/utils";
import { NAME_MIN_LENGTH, NAME_MAX_LENGTH } from "../../lib/constants";

function ProfileContent() {
  const { user, loading, updateProfile } = useAuth();
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
    } else if (formData.name.length < NAME_MIN_LENGTH) {
      newErrors.name = `Name must be at least ${NAME_MIN_LENGTH} characters`;
    } else if (formData.name.length > NAME_MAX_LENGTH) {
      newErrors.name = `Name must be less than ${NAME_MAX_LENGTH} characters`;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
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
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{user?.name}</p>
                  <p className="text-sm text-gray-500">Profile Photo</p>
                </div>
              </div>

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
                  onChange={handleChange}
                  error={errors.email}
                  className="pl-10"
                  disabled
                />
                <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>Member since {user?.createdAt ? formatDate(user.createdAt) : "N/A"}</span>
              </div>

              <div className="pt-2">
                <Button type="submit" loading={saving} className="w-full">
                  <Save className="w-4 h-4" />
                  Save Changes
                </Button>
              </div>
            </form>
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