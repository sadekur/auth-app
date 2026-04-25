"use client";
import { useState } from "react";
import { cn } from "../lib/utils";

export const TabsPills = ({ tabs, activeTab, onChange, className }) => {
  return (
    <div className={cn("flex gap-2 p-1 bg-gray-100 rounded-lg", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-md transition-colors",
            activeTab === tab.value
              ? "bg-white text-blue-600 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export const TabsUnderline = ({ tabs, activeTab, onChange, className }) => {
  return (
    <div className={cn("flex border-b border-gray-200", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={cn(
            "px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors",
            activeTab === tab.value
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export const TabsCards = ({ tabs, activeTab, onChange, className }) => {
  return (
    <div className={cn("grid grid-cols-2 gap-2", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={cn(
            "p-4 text-left border rounded-lg transition-colors",
            activeTab === tab.value
              ? "border-blue-600 bg-blue-50"
              : "border-gray-200 hover:border-gray-300"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};