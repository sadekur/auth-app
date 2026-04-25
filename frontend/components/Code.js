"use client";
import { cn } from "../lib/utils";

export const Code = ({ children, language = "text", className }) => {
  return (
    <pre className={cn(
      "bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto",
      className
    )}>
      <code className={`language-${language}`}>
        {children}
      </code>
    </pre>
  );
};

export const InlineCode = ({ children, className }) => {
  return (
    <code className={cn(
      "bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono",
      className
    )}>
      {children}
    </code>
  );
};

export const CodeBlock = ({ code, language = "javascript", filename, showLineNumbers = true }) => {
  const lines = code.split("\n");

  return (
    <div className="relative group">
      {filename && (
        <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 rounded-t-lg border-b">
          {filename}
        </div>
      )}
      <pre className={cn(
        "bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-auto text-sm",
        filename ? "" : "rounded-lg"
      )}>
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              {showLineNumbers && (
                <span className="select-none text-gray-500 w-8 text-right mr-4">{i + 1}</span>
              )}
              {line}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};