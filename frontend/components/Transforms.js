"use client";
import { cn } from "../lib/utils";

export const Zoom = ({ children, scale = 1.2, className }) => {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="transition-transform duration-200 hover:scale-125"
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
};

export const Rotate = ({ children, degrees = 180, className }) => {
  return (
    <div
      className={cn("transition-transform duration-300 hover:rotate-180", className)}
      style={{ transform: `rotate(${degrees}deg)` }}
    >
      {children}
    </div>
  );
};

export const Flip = ({ children, direction = "horizontal", className }) => {
  return (
    <div
      className={cn("transition-transform duration-300", className)}
      style={{
        transform: direction === "horizontal" ? "scaleX(-1)" : "scaleY(-1)"
      }}
    >
      {children}
    </div>
  );
};

export const Morph = ({ children, isActive, className }) => {
  return (
    <div
      className={cn(
        "transition-all duration-300",
        isActive && "scale-110 rotate-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Bounce = ({ children, className }) => {
  return (
    <div className={cn("transition-transform hover:animate-bounce", className)}>
      {children}
    </div>
  );
};

export const Pulse = ({ children, className }) => {
  return (
    <div className={cn("animate-pulse", className)}>
      {children}
    </div>
  );
};