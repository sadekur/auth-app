"use client";
import { cn } from "../lib/utils";

export const Footer = ({ className, ...props }) => {
  return (
    <footer className={cn("bg-white border-t mt-auto", className)} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
            <span className="font-bold text-gray-900">AuthApp</span>
          </div>
          <p className="text-gray-500 text-sm">
            Secure authentication system built with Next.js and Express
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">Terms</a>
            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const EmptyState = ({ icon: Icon, title, description, action, actionLabel }) => {
  return (
    <div className="text-center py-12">
      {Icon && (
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="w-8 h-8 text-gray-400" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      {description && <p className="text-gray-500 mb-4">{description}</p>}
      {action && (
        <button onClick={action} className="text-blue-600 hover:underline font-medium">
          {actionLabel || "Take Action"}
        </button>
      )}
    </div>
  );
};

export const Logo = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">A</span>
      </div>
      <span className="text-xl font-bold text-gray-900">AuthApp</span>
    </div>
  );
};