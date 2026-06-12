import React, { ReactNode, RefObject } from "react";
import { motion, Variants } from "framer-motion";

/**
 * Simple wrapper component used by the pricing section for scroll‑based reveal animations.
 * It accepts a `as` prop to render any valid HTML element and forwards all other props
 * to the underlying element. The component uses Framer Motion's `whileInView` to trigger
 * the animation when the element enters the viewport.
 */
interface TimelineContentProps<T extends keyof JSX.IntrinsicElements = "div"> {
  /** Element type to render, e.g. "p", "div", "h2" etc. */
  as?: T;
  /** Index of the animation step – used to stagger the delay. */
  animationNum: number;
  /** Reference to the container element for optional viewport calculations. */
  timelineRef?: RefObject<HTMLElement>;
  /** Custom motion variants – falls back to a simple fade‑in/slide‑up. */
  customVariants?: Variants;
  /** Additional class names. */
  className?: string;
  /** Child content. */
  children: ReactNode;
}

export function TimelineContent<T extends keyof JSX.IntrinsicElements = "div">({
  as = "div" as T,
  animationNum,
  timelineRef,
  customVariants,
  className = "",
  children,
}: TimelineContentProps<T>) {
  const Component = as as any;
  // Default variants – a subtle upward slide with fade‑in.
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: animationNum * 0.2, duration: 0.5 },
    },
  };

  const variants = customVariants ?? defaultVariants;

  return (
    <motion.div
      ref={timelineRef as any}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      <Component>{children}</Component>
    </motion.div>
  );
}
