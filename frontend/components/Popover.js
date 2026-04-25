"use client";
import { useState } from "react";
import { cn } from "../lib/utils";

export const TooltipPopover = ({ trigger, title, content, children, className }) => {
  return (
    <div className="group relative inline-block">
      {trigger}
      <div className="absolute left-full top-0 ml-2 hidden group-hover:block z-50">
        <div className={cn("bg-white rounded-lg shadow-xl border p-4 min-w-[200px]", className)}>
          {title && <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>}
          {content && <p className="text-sm text-gray-600">{content}</p>}
          {children}
        </div>
      </div>
    </div>
  );
};

export const ContextMenu = ({ items, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block" onContextMenu={(e) => { e.preventDefault(); setIsOpen(true); }}>
      {children}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="fixed z-50 bg-white rounded-lg shadow-xl border py-1 min-w-[150px]">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => { item.onClick?.(); setIsOpen(false); }}
                className={cn(
                  "w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2",
                  item.danger && "text-red-600",
                  item.disabled && "opacity-50 cursor-not-allowed"
                )}
                disabled={item.disabled}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};