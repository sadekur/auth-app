"use client";
import { cn } from "../lib/utils";

export const Header = ({ title, subtitle, actions, className }) => {
  return (
    <div className={cn("flex items-center justify-between mb-6", className)}>
      <div>
        {title && <h1 className="text-2xl font-bold text-gray-900">{title}</h1>}
        {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
};

export const PageHeader = ({ title, description, breadcrumb, className }) => {
  return (
    <div className={cn("mb-8", className)}>
      {breadcrumb && <div className="mb-4">{breadcrumb}</div>}
      {title && <h1 className="text-3xl font-bold text-gray-900">{title}</h1>}
      {description && <p className="text-gray-500 mt-2">{description}</p>}
    </div>
  );
};

export const PageSection = ({ title, description, actions, children, className }) => {
  return (
    <div className={cn("py-8", className)}>
      {(title || actions) && (
        <div className="flex items-center justify-between mb-6">
          <div>
            {title && <h2 className="text-xl font-semibold text-gray-900">{title}</h2>}
            {description && <p className="text-gray-500 mt-1">{description}</p>}
          </div>
          {actions}
        </div>
      )}
      {children}
    </div>
  );
};