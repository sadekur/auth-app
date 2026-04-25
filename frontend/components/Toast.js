"use client";
import { cn } from "../lib/utils";

export const Toast = ({ 
  message, 
  variant = "info", 
  icon: Icon,
  action,
  duration = 5000,
  className 
}) => {
  const variants = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    error: "bg-red-50 border-red-200 text-red-800",
  };

  const icons = {
    info: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    success: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    warning: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    error: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
  };

  return (
    <div className={cn(
      "flex items-center gap-3 p-4 rounded-lg border shadow-lg animate-slide-up",
      variants[variant],
      className
    )}>
      {Icon && <Icon className="w-5 h-5" />}
      <p className="flex-1 text-sm">{message}</p>
      {action && (
        <button onClick={action.onClick} className="text-sm font-medium underline">
          {action.label}
        </button>
      )}
    </div>
  );
};

export const ToastContainer = ({ toasts }) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};