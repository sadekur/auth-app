"use client";
import { cn } from "../lib/utils";

export const LoadingSpinner = ({ size = "md", color = "blue", className }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const colors = {
    blue: "border-blue-600",
    green: "border-green-600",
    red: "border-red-600",
    gray: "border-gray-600",
    white: "border-white",
  };

  return (
    <div className={cn(
      "border-4 border-gray-200 rounded-full animate-spin",
      sizes[size],
      colors[color],
      className
    )} />
  );
};

export const LoadingDots = ({ size = "md", className }) => {
  const sizes = {
    sm: "w-1 h-1",
    md: "w-2 h-2",
    lg: "w-3 h-3",
  };

  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            "rounded-full bg-blue-600 animate-bounce",
            sizes[size]
          )}
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
};

export const LoadingPulse = ({ className }) => {
  return (
    <div className={cn("animate-pulse space-y-3", className)}>
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
    </div>
  );
};

export const LoadingBar = ({ progress, className }) => {
  return (
    <div className={cn("w-full h-1 bg-gray-200 rounded-full overflow-hidden", className)}>
      <div
        className="h-full bg-blue-600 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};