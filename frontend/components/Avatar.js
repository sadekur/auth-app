"use client";
import { cn } from "../lib/utils";

export const Avatar = ({ src, alt, fallback, size = "md", className }) => {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-lg",
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-medium overflow-hidden",
        sizes[size],
        className
      )}
    >
      {src ? (
        <img src={src} alt={alt || "Avatar"} className="w-full h-full object-cover" />
      ) : (
        <span>{fallback ? getInitials(fallback) : getInitials(alt)}</span>
      )}
    </div>
  );
};