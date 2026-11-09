"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type CursorState = "default" | "hover" | "view" | "open";

export function CustomCursor() {
  const [state, setState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const springX = useSpring(x, { stiffness: 500, damping: 45 });
  const springY = useSpring(y, { stiffness: 500, damping: 45 });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    // Only show on devices with fine pointer (mouse)
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const openItem = target.closest("[data-cursor='open']");
      const projectItem = target.closest("[data-cursor='view']");
      const link = target.closest("a, button");

      if (openItem) setState("open");
      else if (projectItem) setState("view");
      else if (link) setState("hover");
      else setState("default");
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseover", onOver);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseover", onOver);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Don't render on SSR
  if (!mounted) return null;

  const isExpanded = state === "view" || state === "open";
  const label = state === "view" ? "VIEW" : state === "open" ? "OPEN" : null;

  const size = isExpanded ? 72 : state === "hover" ? 22 : 12;
  const offset = -size / 2;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0"
      style={{
        x: springX,
        y: springY,
        zIndex: 9999,
      }}
      aria-hidden
    >
      <motion.div
        className="relative flex items-center justify-center rounded-full"
        style={{
          backgroundColor: isExpanded ? "transparent" : "var(--foreground)",
          border: isExpanded ? "1.5px solid var(--foreground)" : "none",
        }}
        animate={{
          width: size,
          height: size,
          x: offset,
          y: offset,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
        }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0, 1] }}
      >
        {label && (
          <motion.span
            className="text-[9px] font-body font-medium tracking-widest uppercase whitespace-nowrap select-none"
            style={{ color: "var(--foreground)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
