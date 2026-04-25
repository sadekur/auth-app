"use client";
import { cn } from "../lib/utils";

export const Textarea = ({ 
  label, 
  error, 
  className, 
  rows = 4,
  ...props 
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={cn(
          "w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 resize-y",
          "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};