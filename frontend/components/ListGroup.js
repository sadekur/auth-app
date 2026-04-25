"use client";
import { cn } from "../lib/utils";

export const ListGroup = ({ children, className }) => {
  return (
    <div className={cn("divide-y divide-gray-200 border rounded-lg", className)}>
      {children}
    </div>
  );
};

export const ListGroupItem = ({ children, className, active = false, disabled = false }) => {
  return (
    <div
      className={cn(
        "px-4 py-3 flex items-center justify-between",
        active && "bg-blue-50",
        !active && !disabled && "hover:bg-gray-50 cursor-pointer",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </div>
  );
};

export const ListGroupHeading = ({ children, className }) => {
  return (
    <div className={cn("px-4 py-2 bg-gray-50 font-medium text-sm text-gray-700", className)}>
      {children}
    </div>
  );
};

export const ListGroupText = ({ children, className }) => {
  return (
    <span className={cn("text-sm text-gray-600", className)}>
      {children}
    </span>
  );
};