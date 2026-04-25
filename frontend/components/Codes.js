"use client";
import { cn } from "../lib/utils";

export const QRCode = ({ value, size = 128, className }) => {
  const generateQR = () => {
    const cells = [];
    for (let i = 0; i < 21; i++) {
      for (let j = 0; j < 21; j++) {
        cells.push(
          <rect
            key={`${i}-${j}`}
            x={j * (size / 21)}
            y={i * (size / 21)}
            width={size / 21}
            height={size / 21}
            fill={Math.random() > 0.5 ? "#000" : "#fff"}
            rx="1"
          />
        );
      }
    }
    return cells;
  };

  return (
    <svg width={size} height={size} className={cn(className)}>
      {generateQR()}
    </svg>
  );
};

export const Barcode = ({ value, width = 200, height = 60, className }) => {
  const bars = value.split("").map((char) => {
    const widthFactor = parseInt(char, 36) % 3 + 1;
    return widthFactor;
  });

  return (
    <svg width={width} height={height} className={cn(className)}>
      {bars.map((w, i) => (
        <rect
          key={i}
          x={i * (width / bars.length)}
          y="0"
          width={width / bars.length - 1}
          height={height}
          fill="black"
        />
      ))}
    </svg>
  );
};