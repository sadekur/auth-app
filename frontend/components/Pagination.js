"use client";
import { cn } from "../lib/utils";

export const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  siblings = 1,
  className 
}) => {
  const pages = generatePages(currentPage, totalPages, siblings);

  if (totalPages <= 1) return null;

  return (
    <nav className={cn("flex items-center justify-center gap-1", className)}>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-3 py-2 text-sm border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {pages.map((page, index) => {
        if (page === "...") {
          return (
            <span key={`ellipsis-${index}`} className="px-3 py-2">
              ...
            </span>
          );
        }
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "px-3 py-2 text-sm border rounded transition-colors",
              currentPage === page
                ? "bg-blue-600 text-white border-blue-600"
                : "hover:bg-gray-50"
            )}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-3 py-2 text-sm border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </nav>
  );
};

function generatePages(current, total, siblings) {
  const delta = siblings + 1;
  const range = [];
  const rangeWithDots = [];

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }

  let prev;
  for (const i of range) {
    if (prev) {
      if (i - prev === 2) {
        rangeWithDots.push(prev + 1);
      } else if (i - prev !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    prev = i;
  }

  return rangeWithDots;
}