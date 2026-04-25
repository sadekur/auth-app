"use client";
import { cn } from "../lib/utils";

export const Text = ({ 
  children, 
  as: Component = "span", 
  size = "md", 
  weight = "normal",
  color,
  align = "left",
  className 
}) => {
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
  };

  const weights = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const colors = {
    gray: "text-gray-900",
    muted: "text-gray-500",
    blue: "text-blue-600",
    red: "text-red-600",
    green: "text-green-600",
    yellow: "text-yellow-600",
  };

  const aligns = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <Component className={cn(
      sizes[size],
      weights[weight],
      colors[color],
      aligns[align],
      className
    )}>
      {children}
    </Component>
  );
};

export const Heading = ({ children, as: Component = "h1", size = "2xl", className }) => {
  return <Text as={Component} size={size} weight="bold" className={className}>{children}</Text>;
};

export const Paragraph = ({ children, className }) => {
  return <Text as="p" size="md" className={className}>{children}</Text>;
};

export const Caption = ({ children, className }) => {
  return <Text as="span" size="sm" color="muted" className={className}>{children}</Text>;
};