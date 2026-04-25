"use client";
import { cn } from "../lib/utils";

export const Tooltip = ({ children, content, position = "top", className }) => {
  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div className={cn("relative group inline-block", className)}>
      {children}
      <div
        className={cn(
          "absolute z-50 px-2 py-1 text-xs text-white bg-gray-900 rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
          positions[position]
        )}
      >
        {content}
      </div>
    </div>
  );
};

export const TooltipProvider = ({ children }) => {
  return <div>{children}</div>;
};