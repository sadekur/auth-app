"use client";
import { cn } from "../lib/utils";

export const Stepper = ({ currentStep, steps, className }) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;
        const isLast = index === steps.length - 1;

        return (
          <div key={index} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                  isCompleted && "bg-green-600 text-white",
                  isCurrent && "bg-blue-600 text-white",
                  !isCompleted && !isCurrent && "bg-gray-200 text-gray-500"
                )}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  stepNumber
                )}
              </div>
              <span className={cn(
                "mt-2 text-sm font-medium",
                isCurrent ? "text-gray-900" : "text-gray-500"
              )}>
                {step}
              </span>
            </div>
            {!isLast && (
              <div
                className={cn(
                  "flex-1 h-0.5 mx-4",
                  isCompleted ? "bg-green-600" : "bg-gray-200"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export const StepperContent = ({ children, currentStep }) => {
  return (
    <div>
      {Array.isArray(children) ? children[currentStep - 1] : children}
    </div>
  );
};