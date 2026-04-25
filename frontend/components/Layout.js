"use client";
import { cn } from "../lib/utils";

export const Divider = ({ label, className }) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="flex-1 h-px bg-gray-200" />
      {label && (
        <span className="text-sm text-gray-400 font-medium">{label}</span>
      )}
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
};

export const Section = ({ children, title, description, className, ...props }) => {
  return (
    <section className={cn("py-6", className)} {...props}>
      {(title || description) && (
        <div className="mb-6">
          {title && <h2 className="text-xl font-semibold text-gray-900">{title}</h2>}
          {description && <p className="text-gray-500 mt-1">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
};

export const Container = ({ children, className, size = "md", ...props }) => {
  const sizes = {
    sm: "max-w-xl",
    md: "max-w-3xl",
    lg: "max-w-5xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};