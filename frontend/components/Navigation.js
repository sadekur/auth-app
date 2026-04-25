"use client";
import { cn } from "../lib/utils";

export const Breadcrumb = ({ children, className, separator = "/" }) => {
  return (
    <nav className={cn("flex items-center space-x-2 text-sm", className)}>
      {Array.isArray(children) ? children.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <span className="mx-2 text-gray-400">{separator}</span>}
          {item}
        </div>
      )) : children}
    </nav>
  );
};

export const BreadcrumbItem = ({ children, href, active = false }) => {
  if (href && !active) {
    return (
      <a href={href} className="text-gray-500 hover:text-gray-700 hover:underline">
        {children}
      </a>
    );
  }
  return (
    <span className={cn("font-medium", active ? "text-gray-900" : "text-gray-500")}>
      {children}
    </span>
  );
};

export const TabsList = ({ children, className }) => {
  return (
    <div className={cn("flex border-b border-gray-200", className)}>
      {children}
    </div>
  );
};

export const TabsTrigger = ({ children, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-4 py-2 text-sm font-medium border-b-2 transition-colors",
        isActive
          ? "border-blue-600 text-blue-600"
          : "border-transparent text-gray-500 hover:text-gray-700"
      )}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ children, isActive }) => {
  if (!isActive) return null;
  return <div>{children}</div>;
};