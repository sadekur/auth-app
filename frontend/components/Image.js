"use client";
import { useState } from "react";
import { cn } from "../lib/utils";

export const Image = ({ src, alt, fallback, className, ...props }) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={cn("bg-gray-100 flex items-center justify-center", className)}>
        <span className="text-gray-400 text-sm">{fallback || "No image"}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={cn("object-cover", className)}
      {...props}
    />
  );
};

export const ImagePlaceholder = ({ className }) => {
  return (
    <div className={cn("bg-gray-200 animate-pulse", className)} />
  );
};

export const ImageGrid = ({ images, columns = 3, gap = 4, className }) => {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    6: "grid-cols-6",
  };

  return (
    <div className={cn("grid", gridCols[columns], `gap-${gap}`, className)}>
      {images.map((src, index) => (
        <Image key={index} src={src} className="w-full aspect-square" />
      ))}
    </div>
  );
};