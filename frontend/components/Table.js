"use client";
import { cn } from "../lib/utils";

export const Table = ({ children, className }) => {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full">{children}</table>
    </div>
  );
};

export const TableHeader = ({ children, className }) => {
  return <thead className={cn("bg-gray-50", className)}>{children}</thead>;
};

export const TableBody = ({ children, className }) => {
  return <tbody className={cn("divide-y divide-gray-200", className)}>{children}</tbody>;
};

export const TableRow = ({ children, className, hover = true }) => {
  return (
    <tr className={cn(hover && "hover:bg-gray-50 transition-colors", className)}>
      {children}
    </tr>
  );
};

export const TableHead = ({ children, className }) => {
  return (
    <th className={cn("px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", className)}>
      {children}
    </th>
  );
};

export const TableCell = ({ children, className }) => {
  return (
    <td className={cn("px-6 py-4 whitespace-nowrap text-sm text-gray-900", className)}>
      {children}
    </td>
  );
};