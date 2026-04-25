"use client";
import { useState } from "react";
import { cn } from "../lib/utils";

export const FileUpload = ({ 
  onChange, 
  accept = "*", 
  multiple = false, 
  label,
  error,
  className 
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    onChange(multiple ? Array.from(files) : files[0]);
  };

  const handleChange = (e) => {
    const files = e.target.files;
    onChange(multiple ? Array.from(files) : files[0]);
  };

  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center transition-colors",
          isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400",
          error && "border-red-500",
          className
        )}
      >
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="text-gray-600">
            <p className="text-lg mb-2">Drop files here or click to upload</p>
            <p className="text-sm text-gray-400">
              {accept !== "*" ? `Accepted: ${accept}` : "All file types accepted"}
            </p>
          </div>
        </label>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export const FilePreview = ({ file, onRemove }) => {
  const isImage = file.type.startsWith("image/");

  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
      <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
        {isImage ? (
          <img src={URL.createObjectURL(file)} alt="" className="w-full h-full object-cover" />
        ) : (
          <span className="text-xs text-gray-500">{file.name.split(".").pop()}</span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{file.name}</p>
        <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
      </div>
      {onRemove && (
        <button onClick={onRemove} className="text-gray-400 hover:text-red-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  );
};