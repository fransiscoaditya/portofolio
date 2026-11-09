"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin reading-progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-[#c7a974]"
      style={{ scaleX, zIndex: 1100 }}
    />
  );
}

