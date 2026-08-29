"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";
import { ease, duration } from "@/lib/motion";

interface SectionLabelProps {
  latin: string;
  javanese: string;
  className?: string;
}

/**
 * SectionLabel — the signature Latin ↔ Javanese morph interaction
 *
 * When the section enters view:
 * 1. Shows the Javanese text
 * 2. After a beat, crossfades to the Latin label
 *
 * This is the recurring identity motif of the portfolio.
 */
export function SectionLabel({ latin, javanese, className }: SectionLabelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });
  const [phase, setPhase] = useState<"idle" | "javanese" | "latin">("idle");

  useEffect(() => {
    if (!isInView) return;

    // Phase 1: Show Javanese
    setPhase("javanese");

    // Phase 2: After 1.2s, transition to Latin
    const timer = setTimeout(() => {
      setPhase("latin");
    }, 1200);

    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      {/* Javanese layer */}
      <motion.span
        className="text-metadata font-javanese absolute inset-0 flex items-center"
        initial={{ opacity: 0, y: 8 }}
        animate={
          phase === "javanese"
            ? { opacity: 1, y: 0 }
            : phase === "latin"
              ? { opacity: 0, y: -8 }
              : { opacity: 0, y: 8 }
        }
        transition={{ duration: duration.base, ease: ease.expo }}
        aria-hidden
      >
        {javanese}
      </motion.span>

      {/* Latin layer */}
      <motion.span
        className="text-metadata"
        initial={{ opacity: 0, y: 8 }}
        animate={
          phase === "latin"
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 8 }
        }
        transition={{ duration: duration.base, ease: ease.expo }}
      >
        {latin}
      </motion.span>
    </div>
  );
}

void animate; // silence unused import warning
