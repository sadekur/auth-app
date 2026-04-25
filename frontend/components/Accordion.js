"use client";
import { cn } from "../lib/utils";

export const Accordion = ({ children, defaultValue, className }) => {
  return (
    <div className={cn("space-y-2", className)}>
      {children}
    </div>
  );
};

export const AccordionItem = ({ children, value, className }) => {
  return (
    <div className={cn("border rounded-lg overflow-hidden", className)} data-value={value}>
      {children}
    </div>
  );
};

export const AccordionTrigger = ({ children, className }) => {
  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between p-4 text-left font-medium hover:bg-gray-50 transition-colors",
        className
      )}
    >
      {children}
      <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

export const AccordionContent = ({ children, className }) => {
  return (
    <div className={cn("p-4 pt-0 text-gray-600", className)}>
      {children}
    </div>
  );
};