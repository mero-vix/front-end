"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  repeat?: number;
  children: React.ReactNode;
}

export function Marquee({
  className,
  reverse = false,
  repeat = 4,
  children,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "flex w-full overflow-hidden [--gap:0.75rem] [--duration:40s]",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 items-center gap-[var(--gap)]",
            reverse
              ? "animate-[marquee-reverse_var(--duration)_linear_infinite]"
              : "animate-[marquee_var(--duration)_linear_infinite]"
          )}
          aria-hidden={i > 0}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
