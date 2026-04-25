"use client";
import { cn } from "../lib/utils";

export const Tabs = ({ children, defaultValue, value, onValueChange, className }) => {
  const tabs = Array.isArray(children) ? children : [children];
  const selectedValue = value || defaultValue || tabs[0]?.props?.value;

  return (
    <div className={className}>
      <div className="border-b border-gray-200">
        <div className="flex gap-8">
          {tabs.map((tab) => {
            if (!tab) return null;
            const tabValue = tab.props?.value || tab.props?.children?.[0]?.props?.value;
            const isSelected = tabValue === selectedValue;
            return (
              <button
                key={tabValue}
                onClick={() => onValueChange?.(tabValue)}
                className={cn(
                  "py-4 px-1 border-b-2 font-medium text-sm transition-colors",
                  isSelected
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                )}
              >
                {tab.props?.label || tabValue}
              </button>
            );
          })}
        </div>
      </div>
      <div className="py-4">
        {tabs.map((tab) => {
          if (!tab) return null;
          const tabValue = tab.props?.value || tab.props?.children?.[0]?.props?.value;
          const isSelected = tabValue === selectedValue;
          return isSelected ? tab.props?.children : null;
        })}
      </div>
    </div>
  );
};

export const Tab = ({ value, label, children }) => children;