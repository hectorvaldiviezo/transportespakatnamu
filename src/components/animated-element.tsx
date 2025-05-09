"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface AnimatedElementProps {
  children: React.ReactNode;
  animation:
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "zoom-in"
    | "zoom-out";
  delay?: number;
  duration?: number;
  className?: string;
}

export function AnimatedElement({
  children,
  animation,
  delay = 0,
  duration = 500,
  className,
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  const getAnimationClasses = () => {
    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return "opacity-0 translate-y-10";
        case "fade-down":
          return "opacity-0 -translate-y-10";
        case "fade-left":
          return "opacity-0 translate-x-10";
        case "fade-right":
          return "opacity-0 -translate-x-10";
        case "zoom-in":
          return "opacity-0 scale-95";
        case "zoom-out":
          return "opacity-0 scale-105";
        default:
          return "opacity-0";
      }
    }

    return "opacity-100 translate-y-0 translate-x-0 scale-100";
  };

  return (
    <div
      ref={ref}
      className={cn(baseClasses, getAnimationClasses(), className)}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}

const baseClasses = "transition-all ease-out";
