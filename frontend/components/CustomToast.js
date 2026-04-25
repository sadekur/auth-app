"use client";
import { createContext, useContext, useState } from "react";
import { X } from "lucide-react";
import { cn } from "../lib/utils";

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, toast.duration || 5000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toast = {
    success: (message, options) => addToast({ type: "success", message, ...options }),
    error: (message, options) => addToast({ type: "error", message, ...options }),
    warning: (message, options) => addToast({ type: "warning", message, ...options }),
    info: (message, options) => addToast({ type: "info", message, ...options }),
  };

  return (
    <ToastContext.Provider value={{ toast, toasts, removeToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border min-w-[300px] animate-slide-up",
              t.type === "success" && "bg-green-50 border-green-200 text-green-800",
              t.type === "error" && "bg-red-50 border-red-200 text-red-800",
              t.type === "warning" && "bg-yellow-50 border-yellow-200 text-yellow-800",
              t.type === "info" && "bg-blue-50 border-blue-200 text-blue-800"
            )}
          >
            <span className="flex-1">{t.message}</span>
            <button onClick={() => removeToast(t.id)} className="hover:opacity-70">
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};