"use client";
import { useState } from "react";
import { cn } from "../lib/utils";

export const Sidebar = ({ children, className }) => {
  return (
    <aside className={cn("w-64 bg-white border-r h-full", className)}>
      {children}
    </aside>
  );
};

export const SidebarItem = ({ icon: Icon, label, active = false, onClick, badge }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",
        active ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600" : "text-gray-600 hover:bg-gray-50"
      )}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span className="flex-1 font-medium">{label}</span>
      {badge && (
        <span className="px-2 py-0.5 text-xs bg-gray-100 rounded-full">{badge}</span>
      )}
    </button>
  );
};

export const SidebarSection = ({ title, children }) => {
  return (
    <div className="p-4">
      {title && <p className="text-xs font-semibold text-gray-400 uppercase mb-2">{title}</p>}
      {children}
    </div>
  );
};