"use client";
import { cn } from "../lib/utils";

export const Stack = ({ direction = "vertical", gap = 4, children, className }) => {
  const directionClass = direction === "vertical" ? "flex-col" : "flex-row";
  const gapClass = `gap-${gap}`;

  return (
    <div className={cn("flex", directionClass, gapClass, className)}>
      {children}
    </div>
  );
};

export const Cluster = ({ children, align = "start", justify = "start", gap = 4, className }) => {
  return (
    <div className={cn(
      "flex flex-wrap items-center",
      `items-${align}`,
      `justify-${justify}`,
      `gap-${gap}`,
      className
    )}>
      {children}
    </div>
  );
};

export const Center = ({ children, className }) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {children}
    </div>
  );
};

export const Grid = ({ columns = 3, gap = 4, children, className }) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    6: "grid-cols-6",
    12: "grid-cols-12",
  };

  return (
    <div className={cn("grid", gridCols[columns], `gap-${gap}`, className)}>
      {children}
    </div>
  );
};

export const Column = ({ span = 12, children, className }) => {
  return (
    <div className={cn(`col-span-${span}`, className)}>
      {children}
    </div>
  );
};