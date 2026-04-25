"use client";
import { cn } from "../lib/utils";

export const StarRating = ({ rating, max = 5, size = "md", onChange, readonly = false }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(max)].map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => !readonly && onChange?.(i + 1)}
          disabled={readonly}
          className={cn(
            "focus:outline-none",
            !readonly && "cursor-pointer hover:scale-110 transition-transform"
          )}
        >
          <svg
            className={cn(
              sizes[size],
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            )}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      ))}
    </div>
  );
};

export const HeartButton = ({ liked = false, count = 0, onClick, size = "md" }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1 hover:opacity-70 transition-opacity"
    >
      <svg
        className={cn(sizes[size], liked ? "text-red-500 fill-red-500" : "text-gray-400")}
        viewBox="0 0 20 20"
        fill={liked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
      </svg>
      {count > 0 && <span className="text-sm text-gray-600">{count}</span>}
    </button>
  );
};