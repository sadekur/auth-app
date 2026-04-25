"use client";
import { cn } from "../lib/utils";

export const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={cn("animate-pulse bg-gray-200 rounded", className)}
      {...props}
    />
  );
};

export const CardSkeleton = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg border">
      <Skeleton className="h-6 w-1/3 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3 mb-4" />
      <Skeleton className="h-10 w-full" />
    </div>
  );
};

export const ProfileSkeleton = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Skeleton className="w-16 h-16 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
};