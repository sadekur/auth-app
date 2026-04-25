"use client";
import { cn } from "../lib/utils";

export const Fade = ({ children, isVisible = true, duration = 300, className }) => {
  return (
    <div
      className={cn("transition-opacity", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

export const Slide = ({ children, direction = "left", isVisible = true, className }) => {
  const directions = {
    left: isVisible ? "translate-x-0" : "translate-x-full",
    right: isVisible ? "translate-x-0" : "-translate-x-full",
    up: isVisible ? "translate-y-0" : "translate-y-full",
    down: isVisible ? "translate-y-0" : "-translate-y-full",
  };

  return (
    <div
      className={cn("transition-transform duration-300", directions[direction], className)}
    >
      {children}
    </div>
  );
};

export const Scale = ({ children, isVisible = true, className }) => {
  return (
    <div
      className={cn("transition-transform duration-300", className)}
      style={{
        transform: isVisible ? "scale(1)" : "scale(0.8)",
        opacity: isVisible ? 1 : 0
      }}
    >
      {children}
    </div>
  );
};

export const Collapse = ({ children, isOpen, className }) => {
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Expand = ({ children, isExpanded = false, className }) => {
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300",
        isExpanded ? "h-auto" : "h-0",
        className
      )}
    >
      {children}
    </div>
  );
};