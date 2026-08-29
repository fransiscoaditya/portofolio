"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { siteConfig } from "@/content/site";
import { ease } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="bg-[#0a0a0a]" ref={ref}>
      {/* SECTION 1: Massive Initials */}
      <section
        className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
        aria-label="Hero — Introduction"
      >
        {/* Cinematic Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark overlay for contrast */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-70 blur-[10px] scale-110"
          >
            <source src="/images/Tech.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Main UI overlays */}
        <div className="absolute inset-0 z-10 p-4 md:p-8 flex flex-col justify-between pointer-events-none">
          <div className="flex justify-between items-start w-full">
            {/* Top Left */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-metadata text-[--muted-light]"
            >
            </motion.div>
          </div>
          
          <div className="flex justify-between items-end w-full">
            {/* Bottom Left */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-metadata text-[--muted-light]"
            >
              [SENANG BERTEMU DENGANMU]
            </motion.div>

            {/* Bottom Center */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-metadata text-[--muted-light] absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-8"
            >
              [SCROLL ↓]
            </motion.div>

            {/* Bottom Right */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-metadata flex gap-2"
            >
              <span className="text-javanese text-[--muted]">ꦱꦸꦒꦼꦁꦫꦮꦸꦃ</span>
            </motion.div>
          </div>
        </div>

        {/* Massive Typographic Initial */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-20 flex items-center justify-center w-full px-4 md:px-12 mt-12"
        >
          <div className="relative flex items-center w-full max-w-[1600px]">
            {/* Left Half (A & D) */}
            <div className="flex-1 flex justify-between pr-4 md:pr-12">
              <motion.span 
                className="text-[30vw] md:text-[25vw] leading-none font-display text-[--foreground]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: ease.expo }}
              >
                A
              </motion.span>
              <motion.span 
                className="text-[30vw] md:text-[25vw] leading-none font-display text-[--foreground] relative right-[1vw] md:right-[2vw] lg:right-[4vw]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: ease.expo }}
              >
                D
              </motion.span>
            </div>

            {/* Javanese vertical text in the Absolute/Flex Center */}
            <motion.div 
              className="shrink-0 flex flex-col items-center justify-center px-4 md:px-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: ease.expo }}
            >
              <div className="text-[#c7a974] text-xl md:text-3xl font-javanese vertical-text tracking-[0.3em]">
                「ꦄꦢꦶꦠ꧀ꦪ」
              </div>
            </motion.div>

            {/* Right Half (I & T) */}
            <div className="flex-1 flex justify-between pl-4 md:pl-12">
              <motion.span 
                className="text-[30vw] md:text-[25vw] leading-none font-display text-[--foreground] relative left-[4vw] md:left-[8vw] lg:left-[12vw]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: ease.expo }}
              >
                I
              </motion.span>
              <motion.span 
                className="text-[30vw] md:text-[25vw] leading-none font-display text-[--foreground]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: ease.expo }}
              >
                T
              </motion.span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: Professional Positioning — HR Layer */}
      <section className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-20 py-24 z-20">
        <div className="max-w-5xl">
          {/* Layer 1: HR — Name + Role */}
          <div className="mb-6">
            <p className="text-metadata text-[--muted] tracking-[0.25em] mb-3">
              {siteConfig.fullName.toUpperCase()}
            </p>
          </div>
          <h2 className="text-display-lg md:text-[8vw] font-display text-[--foreground] leading-[0.85]">
            WEB &amp; MOBILE
          </h2>
          <h2 className="text-display-lg md:text-[8vw] font-display text-[--foreground] leading-[0.85] mt-1">
            DEVELOPER
          </h2>
          <h2 className="text-display-lg md:text-[8vw] font-display text-[--foreground] leading-[0.85] mt-1">
            <span className="font-accent italic text-[#c7a974] normal-case tracking-normal text-[6vw] md:text-[5vw]">&amp;</span>{" "}
            SOFTWARE DEVELOPER
          </h2>

          {/* Layer 2: Positioning Statement */}
          <div className="mt-10 md:mt-14 max-w-2xl">
            <p className="text-body-lg text-[--muted-light]">
              {siteConfig.shortBio}
            </p>
          </div>

          {/* Availability Tags */}
          <div className="mt-8 flex flex-wrap gap-3">
            {siteConfig.availability.map((tag) => (
              <span
                key={tag}
                className="text-metadata border border-[--border] px-3 py-1 text-[--muted] tracking-[0.15em]"
              >
                {tag}
              </span>
            ))}
            <span className="text-metadata text-[#c7a974] border border-[#c7a974]/30 px-3 py-1 tracking-[0.15em]">
              AVAILABLE ●
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 3: Credibility & Personality Statement */}
      <section className="relative min-h-[50vh] flex flex-col justify-center px-6 md:px-20 py-24 border-t border-[--border]">
        <div className="max-w-xl">
          <p className="text-metadata text-[--muted] uppercase tracking-[0.2em] mb-4">
            WEB &amp; MOBILE DEVELOPER · KOTA SEMARANG, INDONESIA
          </p>
          <p className="text-body-md font-body text-[--muted-light] mt-4">
            Fokus pada rekayasa perangkat lunak, pengembangan aplikasi web modern, mobile apps (Flutter / Kotlin), serta integrasi sistem dan database yang andal.
          </p>
          <p className="text-body-md font-body text-[--muted-light] mt-4">
            Mahasiswa Sistem Informasi UNIKA Soegijapranata (IPK 3.82). Alumni Bangkit Academy 2024. Penulis 4 buku ber-HAKI di bidang teknologi.
          </p>
        </div>
      </section>
    </div>
  );
}
