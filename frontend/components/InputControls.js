"use client";
import { cn } from "../lib/utils";

export const NumberInput = ({ 
  value, 
  onChange, 
  min = 0, 
  max = 100, 
  step = 1, 
  label,
  error,
  className 
}) => {
  const handleChange = (e) => {
    let newValue = parseInt(e.target.value) || min;
    newValue = Math.max(min, Math.min(max, newValue));
    onChange(newValue);
  };

  const increment = () => {
    const newValue = Math.min(max, value + step);
    onChange(newValue);
  };

  const decrement = () => {
    const newValue = Math.max(min, value - step);
    onChange(newValue);
  };

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">{label}</label>
      )}
      <div className="flex items-center">
        <button
          type="button"
          onClick={decrement}
          className="px-3 py-2 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
        >
          -
        </button>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          className={cn(
            "w-20 text-center border border-gray-300 focus:outline-none focus:border-blue-500",
            error && "border-red-500"
          )}
        />
        <button
          type="button"
          onClick={increment}
          className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
        >
          +
        </button>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export const DatePicker = ({ value, onChange, label, error, className }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500",
          error && "border-red-500"
        )}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};