"use client";
import { cn } from "../lib/utils";

export const Spinner = ({ size = "md", className }) => {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-4 border-gray-200 border-t-blue-600",
        sizes[size],
        className
      )}
    />
  );
};

export const PageLoader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
};