"use client";
import { useState } from "react";
import { cn } from "../lib/utils";

export const Calendar = ({ value, onChange, minDate, maxDate, className }) => {
  const [viewDate, setViewDate] = useState(value ? new Date(value) : new Date());

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const isDisabled = (date) => {
    if (minDate && date < new Date(minDate)) return true;
    if (maxDate && date > new Date(maxDate)) return true;
    return false;
  };

  const days = [];
  const daysInMonth = getDaysInMonth(viewDate);
  const firstDay = getFirstDayOfMonth(viewDate);

  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="p-2" />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    const isSelected = value === formatDate(date);
    const disabled = isDisabled(date);

    days.push(
      <button
        key={day}
        onClick={() => !disabled && onChange(formatDate(date))}
        disabled={disabled}
        className={cn(
          "p-2 rounded text-sm transition-colors",
          isSelected && "bg-blue-600 text-white",
          !isSelected && !disabled && "hover:bg-gray-100",
          disabled && "text-gray-300 cursor-not-allowed"
        )}
      >
        {day}
      </button>
    );
  }

  return (
    <div className={cn("bg-white rounded-lg border p-4", className)}>
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => setViewDate(new Date(viewDate.setMonth(viewDate.getMonth() - 1)))}>
          Previous
        </button>
        <span className="font-medium">
          {viewDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </span>
        <button onClick={() => setViewDate(new Date(viewDate.setMonth(viewDate.getMonth() + 1)))}>
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d} className="p-2 text-xs font-medium text-gray-500">{d}</div>
        ))}
        {days}
      </div>
    </div>
  );
};