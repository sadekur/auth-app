"use client";
import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";
import { cn } from "../lib/utils";

export const Alert = ({ children, variant = "info", className, ...props }) => {
  const variants = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    error: "bg-red-50 border-red-200 text-red-800",
  };

  const icons = {
    info: <Info className="h-5 w-5" />,
    success: <CheckCircle className="h-5 w-5" />,
    warning: <AlertTriangle className="h-5 w-5" />,
    error: <XCircle className="h-5 w-5" />,
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border p-4",
        variants[variant],
        className
      )}
      {...props}
    >
      {icons[variant]}
      <div>{children}</div>
    </div>
  );
};