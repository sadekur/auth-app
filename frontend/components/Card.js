"use client";
import { cn } from "../lib/utils";

export const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-lg bg-white p-6 shadow-lg border border-gray-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className, ...props }) => {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className, ...props }) => {
  return (
    <h2 className={cn("text-2xl font-bold text-gray-900", className)} {...props}>
      {children}
    </h2>
  );
};

export const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      {children}
    </div>
  );
};