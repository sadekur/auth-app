"use client";
import { cn } from "../lib/utils";

export const CopyButton = ({ text, className }) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className={cn(
        "px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors",
        className
      )}
    >
      Copy
    </button>
  );
};

export const IconButton = ({ icon: Icon, onClick, size = "md", variant = "default", className, ...props }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const variants = {
    default: "bg-gray-100 hover:bg-gray-200 text-gray-600",
    primary: "bg-blue-100 hover:bg-blue-200 text-blue-600",
    danger: "bg-red-100 hover:bg-red-200 text-red-600",
    success: "bg-green-100 hover:bg-green-200 text-green-600",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center transition-colors",
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      <Icon className={sizes[size].replace("w-", "w-").replace("h-", "h-")} />
    </button>
  );
};

export const FloatingActionButton = ({ icon: Icon, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg",
        "flex items-center justify-center transition-all hover:scale-105",
        className
      )}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
};