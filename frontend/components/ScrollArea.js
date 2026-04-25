"use client";
import { cn } from "../lib/utils";

export const ScrollArea = ({ children, className, maxHeight = "300px" }) => {
  return (
    <div className={cn("overflow-auto", className)} style={{ maxHeight }}>
      {children}
    </div>
  );
};

export const ScrollShadow = ({ children, className }) => {
  return (
    <div className={cn("relative", className)}>
      <div className="overflow-auto max-h-64">
        {children}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};

export const AutoScroll = ({ children, speed = 1, className }) => {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="animate-[scroll_10s_linear_infinite]"
        style={{ animationDuration: `${10 / speed}s` }}
      >
        {children}
      </div>
    </div>
  );
};