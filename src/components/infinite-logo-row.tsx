"use client";
import { BASE_PATH } from "@/lib/config";
import Image from "next/image";

interface InfiniteLogoRowProps {
  logos: string[];
  direction: "left" | "right";
  duration: number;
}

export function InfiniteLogoRow({
  logos,
  direction,
  duration,
}: InfiniteLogoRowProps) {
  const animationStyle = {
    animationDuration: `${duration}s`,
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary to-transparent z-10" />
      <div
        className={`flex gap-16 ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
        style={animationStyle}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <Image
              src={BASE_PATH + (logo || "/placeholder.svg")}
              alt={`Logo ${index + 1}`}
              width={180}
              height={90}
              className="h-24 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
