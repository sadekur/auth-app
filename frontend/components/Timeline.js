"use client";
import { cn } from "../lib/utils";

export const Timeline = ({ children, className }) => {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
      <div className="space-y-8">{children}</div>
    </div>
  );
};

export const TimelineItem = ({ children, icon: Icon, className }) => {
  return (
    <div className={cn("relative pl-12", className)}>
      <div className="absolute left-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
        {Icon ? (
          <Icon className="w-4 h-4 text-blue-600" />
        ) : (
          <div className="w-2 h-2 bg-blue-600 rounded-full" />
        )}
      </div>
      <div className="bg-white p-4 rounded-lg border">{children}</div>
    </div>
  );
};

export const TimelineTitle = ({ children, className }) => {
  return (
    <h4 className={cn("font-semibold text-gray-900 mb-1", className)}>
      {children}
    </h4>
  );
};

export const TimelineDescription = ({ children, className }) => {
  return (
    <p className={cn("text-sm text-gray-600", className)}>
      {children}
    </p>
  );
};

export const TimelineDate = ({ children, className }) => {
  return (
    <span className={cn("text-xs text-gray-400", className)}>
      {children}
    </span>
  );
};