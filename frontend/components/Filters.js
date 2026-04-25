"use client";
import { cn } from "../lib/utils";

export const Blur = ({ children, intensity = 2, className }) => {
  return (
    <div className={cn(`blur-${intensity}`, className)}>
      {children}
    </div>
  );
};

export const Grayscale = ({ children, className }) => {
  return (
    <div className={cn("grayscale", className)}>
      {children}
    </div>
  );
};

export const Sepia = ({ children, className }) => {
  return (
    <div className={cn("sepia", className)}>
      {children}
    </div>
  );
};

export const Brightness = ({ children, level = 1, className }) => {
  return (
    <div style={{ filter: `brightness(${level})` }} className={className}>
      {children}
    </div>
  );
};

export const Contrast = ({ children, level = 1, className }) => {
  return (
    <div style={{ filter: `contrast(${level})` }} className={className}>
      {children}
    </div>
  );
};

export const Saturate = ({ children, level = 1, className }) => {
  return (
    <div style={{ filter: `saturate(${level})` }} className={className}>
      {children}
    </div>
  );
};