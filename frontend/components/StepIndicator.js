"use client";
import { cn } from "../lib/utils";

export const StepIndicator = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;

        return (
          <div key={index} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                  isCompleted && "bg-green-600 text-white",
                  isCurrent && "bg-blue-600 text-white",
                  !isCompleted && !isCurrent && "bg-gray-200 text-gray-500"
                )}
              >
                {isCompleted ? "✓" : stepNumber}
              </div>
              <span className="mt-2 text-xs text-center">{step}</span>
            </div>
            {index < steps.length - 1 && (
              <div className={cn(
                "flex-1 h-0.5 mx-2",
                isCompleted ? "bg-green-600" : "bg-gray-200"
              )} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export const ProgressSteps = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;

        return (
          <button
            key={index}
            onClick={() => onStepClick?.(stepNumber)}
            className="w-full flex items-center gap-4 text-left"
          >
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors shrink-0",
                isCompleted && "bg-green-600 text-white",
                isCurrent && "bg-blue-600 text-white",
                !isCompleted && !isCurrent && "bg-gray-200 text-gray-500"
              )}
            >
              {isCompleted ? "✓" : stepNumber}
            </div>
            <div className="flex-1">
              <p className={cn(
                "font-medium",
                isCurrent ? "text-gray-900" : "text-gray-500"
              )}>
                {step.title}
              </p>
              {step.description && (
                <p className="text-sm text-gray-500">{step.description}</p>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
};