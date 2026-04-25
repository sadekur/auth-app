"use client";
import { cn } from "../lib/utils";

export const Divider = ({ label, orientation = "horizontal", className }) => {
  if (orientation === "vertical") {
    return <div className={cn("w-px bg-gray-200 h-full", className)} />;
  }

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="flex-1 h-px bg-gray-200" />
      {label && <span className="text-sm text-gray-400 font-medium">{label}</span>}
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
};

export const Spacer = ({ size = 4, axis = "vertical", className }) => {
  return (
    <div
      className={className}
      style={{
        width: axis === "horizontal" ? `${size * 4}px` : undefined,
        height: axis === "vertical" ? `${size * 4}px` : undefined,
      }}
    />
  );
};

export const Box = ({ children, className }) => {
  return <div className={cn("block", className)}>{children}</div>;
};

export const Inline = ({ children, className }) => {
  return <span className={cn("inline", className)}>{children}</span>;
};

export const Stack = ({ children, spacing = 4, direction = "vertical", className }) => {
  return (
    <div
      className={cn(
        "flex",
        direction === "vertical" ? "flex-col" : "flex-row",
        `gap-${spacing}`,
        className
      )}
    >
      {children}
    </div>
  );
};