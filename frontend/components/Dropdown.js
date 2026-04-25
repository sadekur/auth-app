"use client";
import { cn } from "../lib/utils";

export const Dropdown = ({ trigger, children, className }) => {
  return (
    <div className="relative inline-block">
      {trigger}
      <div className={cn("absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1 z-50", className)}>
        {children}
      </div>
    </div>
  );
};

export const DropdownItem = ({ children, onClick, icon: Icon, danger = false, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex items-center gap-2 w-full px-4 py-2 text-left transition-colors",
        danger ? "text-red-600 hover:bg-red-50" : "text-gray-700 hover:bg-gray-100",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
};

export const DropdownDivider = () => {
  return <div className="border-t my-1" />;
};