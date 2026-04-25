"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView];
};

export const InView = ({ children, className, fallback = null, once = true }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  if (!isInView && fallback) {
    return <div ref={ref}>{fallback}</div>;
  }

  return (
    <div ref={ref} className={cn(isInView && "animate-fade-in", className)}>
      {isInView ? children : fallback}
    </div>
  );
};

export const LazyLoad = ({ src, alt, className }) => {
  const [ref, isInView] = useInView();
  const [loaded, setLoaded] = useState(false);

  return (
    <div ref={ref} className={cn("bg-gray-100", className)}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={cn(loaded ? "opacity-100" : "opacity-0", "transition-opacity")}
        />
      )}
    </div>
  );
};