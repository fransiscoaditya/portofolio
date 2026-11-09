"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ease } from "@/lib/motion";

interface PageHeroProps {
  /** Giant 4-letter title, e.g. "ADIT", "WORK", "INFO" */
  word: string;
  /** Aksara syllables stacked vertically in the centre, e.g. ["ꦄ", "ꦢꦶ", "ꦠꦾ"]. */
  accent: readonly string[];
  /** Background video (muted, looped, blurred). */
  video: string;
  /** Small meta line, bottom-left. */
  meta?: string;
  /** Small meta line, bottom-right. */
  metaRight?: string;
}

/**
 * Full-viewport page opener — Monumental edge-to-edge typography inspired by Mason Wong (MHHW).
 * Symmetrical 5-column grid: [Letter 1] [Letter 2] [Javanese Emblem] [Letter 3] [Letter 4]
 * Flawlessly balanced across the entire screen width with towering letters and an enlarged bold gold centerpiece.
 */
export function PageHero({ word, accent, video, meta, metaRight }: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const letters = word.toUpperCase().split("");
  const letter1 = letters[0] ?? "";
  const letter2 = letters[1] ?? "";
  const letter3 = letters[2] ?? "";
  const letter4 = letters[3] ?? "";

  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-14 pb-12"
      aria-label={word}
    >
      {/* Video background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-70 blur-[8px] scale-110"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      {/* Bottom meta */}
      <div className="absolute inset-x-0 bottom-0 z-30 px-4 md:px-6 py-4 flex items-end justify-between pointer-events-none">
        <span className="text-metadata">{meta}</span>
        <span className="text-metadata hidden sm:block">[SCROLL ↓]</span>
        <span className="text-metadata">{metaRight}</span>
      </div>

      {/* Giant word — Edge-to-edge 5-column layout mirroring Mason Wong's composition */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 w-full -translate-y-2 sm:-translate-y-4 md:-translate-y-6"
      >
        <h1
          className="font-display text-(--foreground) w-full grid grid-cols-[1fr_1fr_auto_1fr_1fr] items-center px-3 sm:px-6 md:px-10 lg:px-14 xl:px-16 text-[25vw] sm:text-[24vw] md:text-[23vw] lg:text-[22vw] xl:text-[21vw] leading-[0.76] select-none"
        >
          <span className="sr-only">{word}</span>

          {/* Col 1: Letter 1 — Left outer pillar */}
          <span aria-hidden="true" className="flex justify-center items-center">
            <motion.span
              className="inline-block select-none"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05, ease: ease.expo }}
            >
              {letter1}
            </motion.span>
          </span>

          {/* Col 2: Letter 2 — Left inner pillar */}
          <span aria-hidden="true" className="flex justify-center items-center">
            <motion.span
              className="inline-block select-none"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: ease.expo }}
            >
              {letter2}
            </motion.span>
          </span>

          {/* Col 3: Center Aksara Emblem — Enlarged bold cultural centerpiece (dead center of screen) */}
          <motion.span
            aria-hidden="true"
            className="shrink-0 flex items-center justify-center px-3 sm:px-6 md:px-8 lg:px-12"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: ease.expo }}
          >
            <div className="relative flex flex-col items-center justify-center py-3 px-4 sm:py-4 sm:px-5 md:py-5 md:px-7 lg:py-6 lg:px-8 select-none">
              {/* Top-left corner bracket */}
              <span className="absolute top-0 left-0 w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8 h-4 sm:h-5 md:h-6 lg:h-7 xl:h-8 border-t-2 sm:border-t-[2.5px] border-l-2 sm:border-l-[2.5px] border-[#c7a974]" />
              {/* Bottom-right corner bracket */}
              <span className="absolute bottom-0 right-0 w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8 h-4 sm:h-5 md:h-6 lg:h-7 xl:h-8 border-b-2 sm:border-b-[2.5px] border-r-2 sm:border-r-[2.5px] border-[#c7a974]" />

              {/* Javanese Syllables — ꦄ ꦢꦶ ꦠꦾ enlarged even more boldly */}
              <div className="flex flex-col items-center gap-1.5 sm:gap-2 md:gap-2.5 text-[#c7a974] font-javanese text-center font-normal drop-shadow-[0_2px_20px_rgba(199,169,116,0.4)]">
                {accent.map((syllable, i) => (
                  <span
                    key={i}
                    className="block leading-[1.05] text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5rem] transition-transform duration-300 hover:scale-105"
                  >
                    {syllable}
                  </span>
                ))}
              </div>
            </div>
          </motion.span>

          {/* Col 4: Letter 3 — Right inner pillar */}
          <span aria-hidden="true" className="flex justify-center items-center">
            <motion.span
              className="inline-block select-none"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: ease.expo }}
            >
              {letter3}
            </motion.span>
          </span>

          {/* Col 5: Letter 4 — Right outer pillar */}
          <span aria-hidden="true" className="flex justify-center items-center">
            <motion.span
              className="inline-block select-none"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: ease.expo }}
            >
              {letter4}
            </motion.span>
          </span>
        </h1>
      </motion.div>
    </section>
  );
}
