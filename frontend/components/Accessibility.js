"use client";
import { cn } from "../lib/utils";

export const VisuallyHidden = ({ children, className }) => {
  return (
    <div className={cn(
      "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0",
      "[clip:rect(0,0,0,0)]",
      className
    )}>
      {children}
    </div>
  );
};

export const ScreenReaderOnly = VisuallyHidden;

export const FocusOutline = ({ children, className }) => {
  return (
    <div className={cn("focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2", className)}>
      {children}
    </div>
  );
};

export const FocusVisible = ({ children, className }) => {
  return (
    <div className={cn("focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2", className)}>
      {children}
    </div>
  );
};