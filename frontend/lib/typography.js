export const SIZES = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
};

export const WEIGHTS = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export const COLORS = {
  gray: "text-gray",
  red: "text-red",
  blue: "text-blue",
  green: "text-green",
  yellow: "text-yellow",
  purple: "text-purple",
  pink: "text-pink",
  indigo: "text-indigo",
};

export const getTypographyClass = (size, weight, color) => {
  return [SIZES[size] || SIZES.md, WEIGHTS[weight] || WEIGHTS.normal, COLORS[color] || ""].join(" ");
};