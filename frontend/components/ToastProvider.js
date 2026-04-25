"use client";
import { Toaster } from "sonner";

export const ToastProvider = ({ children }) => {
  return (
    <>
      {children}
      <Toaster 
        position="top-right" 
        richColors 
        closeButton
        toastOptions={{
          style: {
            background: "#f9fafb",
            border: "1px solid #e5e7eb",
          },
        }}
      />
    </>
  );
};