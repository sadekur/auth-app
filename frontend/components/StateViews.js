"use client";
import { cn } from "../lib/utils";

export const Placeholder = ({ 
  title, 
  description, 
  icon: Icon,
  action, 
  actionLabel,
  className 
}) => {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center py-12 text-center",
      className
    )}>
      {Icon && (
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-gray-400" />
        </div>
      )}
      {title && <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>}
      {description && <p className="text-gray-500 mb-4 max-w-md">{description}</p>}
      {action && actionLabel && (
        <button onClick={action} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export const EmptyState = Placeholder;

export const NotFound = ({ title = "404", description = "Page not found", action, actionLabel }) => {
  return (
    <Placeholder
      title={title}
      description={description}
      action={action}
      actionLabel={actionLabel}
    />
  );
};

export const ErrorState = ({ message, onRetry }) => {
  return (
    <Placeholder
      title="Something went wrong"
      description={message}
      icon={() => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )}
      action={onRetry}
      actionLabel="Try Again"
    />
  );
};

export const LoadingState = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-4" />
      <p className="text-gray-500">{message}</p>
    </div>
  );
};