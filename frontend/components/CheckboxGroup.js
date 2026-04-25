"use client";
import { cn } from "../lib/utils";

export const CheckboxGroup = ({ options, value = [], onChange, label, className }) => {
  const toggleOption = (optionValue) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={value.includes(option.value)}
              onChange={() => toggleOption(option.value)}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export const RadioGroup = ({ options, value, onChange, label, className }) => {
  return (
    <div className={cn("space-y-2", className)}>
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export const ToggleGroup = ({ options, value, onChange, label, className }) => {
  return (
    <div className={cn("space-y-2", className)}>
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <div className="flex rounded-lg border">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={cn(
              "flex-1 px-4 py-2 text-sm font-medium transition-colors",
              value === option.value
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-50"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};