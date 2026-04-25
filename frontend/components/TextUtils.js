"use client";
import { cn } from "../lib/utils";

export const Truncate = ({ children, length = 100, showMore, className }) => {
  const text = String(children);
  const isLong = text.length > length;
  const displayText = isLong ? text.slice(0, length) + "..." : text;

  return (
    <div className={cn(className)}>
      <span>{displayText}</span>
      {isLong && showMore && (
        <button className="ml-2 text-blue-600 hover:underline text-sm">Show more</button>
      )}
    </div>
  );
};

export const Highlight = ({ children, query, className }) => {
  if (!query) return <span>{children}</span>;
  
  const text = String(children);
  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);

  return (
    <span className={cn(className)}>
      {parts.map((part, i) => 
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-200 px-0.5 rounded">{part}</mark>
        ) : part
      )}
    </span>
  );
};

export const EllipsisText = ({ children, lines = 1, className }) => {
  return (
    <span className={cn(
      lines === 1 ? "truncate" : "",
      lines > 1 ? "line-clamp-" + lines : "",
      className
    )}>
      {children}
    </span>
  );
};