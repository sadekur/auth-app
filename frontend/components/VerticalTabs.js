"use client";
import { cn } from "../lib/utils";

export const TabsVertical = ({ tabs, activeTab, onChange, className }) => {
  return (
    <div className={cn("flex flex-col", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={cn(
            "flex items-center gap-3 px-4 py-3 text-left border-l-2 transition-colors",
            activeTab === tab.value
              ? "border-blue-600 bg-blue-50 text-blue-700"
              : "border-transparent text-gray-600 hover:bg-gray-50"
          )}
        >
          {tab.icon && <tab.icon className="w-5 h-5" />}
          <div>
            <p className="font-medium">{tab.label}</p>
            {tab.description && (
              <p className="text-sm text-gray-500">{tab.description}</p>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export const TabPanel = ({ children, isActive }) => {
  if (!isActive) return null;
  return <div className="p-4">{children}</div>;
};