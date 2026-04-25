"use client";
import { cn } from "../lib/utils";

export const IconWrapper = ({ icon: Icon, size = "md", variant = "default", className }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const variants = {
    default: "bg-gray-100 text-gray-600",
    primary: "bg-blue-100 text-blue-600",
    success: "bg-green-100 text-green-600",
    warning: "bg-yellow-100 text-yellow-600",
    danger: "bg-red-100 text-red-600",
  };

  return (
    <div className={cn(
      "rounded-full flex items-center justify-center",
      sizes[size],
      variants[variant],
      className
    )}>
      <Icon className={cn(sizes[size].replace("w-", "w-").replace("h-", "h-"))} />
    </div>
  );
};

export const IconButton = ({ icon: Icon, onClick, size = "md", variant = "default", className }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const variants = {
    default: "bg-gray-100 hover:bg-gray-200 text-gray-600",
    primary: "bg-blue-100 hover:bg-blue-200 text-blue-600",
    success: "bg-green-100 hover:bg-green-200 text-green-600",
    warning: "bg-yellow-100 hover:bg-yellow-200 text-yellow-600",
    danger: "bg-red-100 hover:bg-red-200 text-red-600",
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
    >
      <Icon className={sizes[size].replace("w-", "w-").replace("h-", "h-")} />
    </button>
  );
};

export const IconText = ({ icon: Icon, text, className }) => {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Icon className="w-4 h-4" />
      {text}
    </span>
  );
};