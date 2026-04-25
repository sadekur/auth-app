"use client";
import { cn } from "../lib/utils";

export const AvatarGroup = ({ children, max = 4, size = "md", className }) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  const visibleChildren = childrenArray.slice(0, max);
  const remainingCount = childrenArray.length - max;

  const sizes = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base",
  };

  return (
    <div className={cn("flex -space-x-2", className)}>
      {visibleChildren.map((child, index) => (
        <div key={index} className="ring-2 ring-white rounded-full">
          {child}
        </div>
      ))}
      {remainingCount > 0 && (
        <div className={cn(
          "ring-2 ring-white rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium",
          sizes[size]
        )}>
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export const AvatarStack = ({ users, size = "md", className }) => {
  return (
    <AvatarGroup max={5} size={size} className={className}>
      {users.map((user, index) => (
        <div key={index} className={cn(
          "rounded-full bg-blue-100 flex items-center justify-center overflow-hidden",
          size === "sm" && "w-6 h-6",
          size === "md" && "w-8 h-8",
          size === "lg" && "w-10 h-10"
        )}>
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-blue-600 font-medium text-xs">
              {user.name?.charAt(0)?.toUpperCase()}
            </span>
          )}
        </div>
      ))}
    </AvatarGroup>
  );
};