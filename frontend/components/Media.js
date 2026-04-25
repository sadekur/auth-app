"use client";
import { useState, useRef } from "react";
import { cn } from "../lib/utils";

export const Video = ({ src, poster, autoplay = false, loop = false, muted = true, className }) => {
  return (
    <video
      src={src}
      poster={poster}
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
      controls
      className={cn("w-full rounded-lg", className)}
    />
  );
};

export const Audio = ({ src, className }) => {
  return (
    <audio src={src} controls className={cn("w-full", className)} />
  );
};

export const VideoPlayer = ({ src, poster, className }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  return (
    <div className={cn("relative bg-black rounded-lg overflow-hidden", className)}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full"
        onTimeUpdate={() => {
          if (videoRef.current) {
            setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
          }
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
        <input
          type="range"
          value={progress}
          onChange={(e) => {
            if (videoRef.current) {
              videoRef.current.currentTime = (e.target.value / 100) * videoRef.current.duration;
            }
          }}
          className="w-full"
        />
      </div>
    </div>
  );
};