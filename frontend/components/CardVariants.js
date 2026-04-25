"use client";
import { cn } from "../lib/utils";

export const CardWithImage = ({ src, alt, title, description, footer, className }) => {
  return (
    <div className={cn("bg-white rounded-xl shadow-sm border overflow-hidden", className)}>
      {src && (
        <div className="aspect-video bg-gray-100">
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-4">
        {title && <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>}
        {description && <p className="text-gray-600 text-sm">{description}</p>}
      </div>
      {footer && (
        <div className="px-4 py-3 bg-gray-50 border-t">
          {footer}
        </div>
      )}
    </div>
  );
};

export const CardHover = ({ children, className }) => {
  return (
    <div className={cn(
      "bg-white rounded-xl shadow-sm border p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1",
      className
    )}>
      {children}
    </div>
  );
};

export const CardGrid = ({ children, columns = 3, gap = 6, className }) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid", gridCols[columns], `gap-${gap}`, className)}>
      {children}
    </div>
  );
};