"use client";
import { Loader2 } from "lucide-react";
import { cn } from "../lib/utils";

export const Button = ({ children, loading, disabled, className, variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    outline: "border-2 border-gray-300 hover:bg-gray-100 text-gray-700",
  };

  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        className
      )}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
};