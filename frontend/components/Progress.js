"use client";
import { cn } from "../lib/utils";

export const Progress = ({ value, max = 100, className, showLabel = false }) => {
  const percentage = (value / max) * 100;

  return (
    <div className={cn("space-y-1", className)}>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-300",
            percentage > 75 ? "bg-green-500" : percentage > 50 ? "bg-blue-500" : "bg-yellow-500"
          )}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-sm text-gray-500">{Math.round(percentage)}%</span>
      )}
    </div>
  );
};

export const PasswordStrength = ({ password }) => {
  const calculateStrength = () => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const strength = calculateStrength();
  const labels = ["Very Weak", "Weak", "Fair", "Strong", "Very Strong"];
  const colors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500", "bg-green-600"];

  if (!password) return null;

  return (
    <div className="space-y-2">
      <div className="flex gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={cn(
              "h-1 flex-1 rounded-full transition-colors",
              i < strength ? colors[strength - 1] : "bg-gray-200"
            )}
          />
        ))}
      </div>
      <p className="text-xs text-gray-500">
        Password strength: {labels[strength - 1] || "Type a password"}
      </p>
    </div>
  );
};