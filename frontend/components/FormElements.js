"use client";
import { cn } from "../lib/utils";

export const Select = ({ 
  label, 
  error, 
  className, 
  children,
  ...props 
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        className={cn(
          "w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900",
          "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export const Checkbox = ({ label, checked, onChange, error, className, ...props }) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={cn(
            "h-4 w-4 rounded border-gray-300 text-blue-600",
            "focus:ring-2 focus:ring-blue-500/20",
            className
          )}
          {...props}
        />
      </div>
      {label && (
        <div className="ml-3 text-sm">
          <label className="font-medium text-gray-700">{label}</label>
        </div>
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};