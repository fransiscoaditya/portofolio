"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/content/site";
import { ease } from "@/lib/motion";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/work", label: "WORK" },
  { href: "/info", label: "INFO" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [pathname]);

  const isExpanded = scrolled || isHovered;

  const activeLink =
    navLinks.find((link) =>
      link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
    ) || navLinks[0];

  return (
    <>
      <header
        style={{ zIndex: 1000 }}
        className={`fixed top-0 left-0 right-0 transition-all duration-300 pointer-events-auto ${
          scrolled ? "bg-(--background)/95 backdrop-blur-md border-b border-(--border)" : "bg-transparent"
        }`}
      >
        <nav
          className="w-full px-4 md:px-5 py-3 md:py-3.5"
          aria-label="Navigasi Utama"
        >
          {/* Desktop Layout: logo left, expandable menu centre, year + CV right (setara) */}
          <div className="hidden md:grid grid-cols-3 items-center w-full">
            <Link
              href="/"
              className="pointer-events-auto justify-self-start py-1"
              aria-label="Adit — Beranda"
            >
              <span className="font-display text-lg md:text-xl tracking-[0.04em] text-(--foreground) hover:text-(--muted-light) transition-colors">
                ADIT
              </span>
            </Link>

            {/* Expandable Menu: Compact single line at top, slides down on scroll/hover */}
            <div
              className="justify-self-center pointer-events-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {!isExpanded ? (
                  <motion.button
                    key="compact"
                    type="button"
                    onClick={() => setIsHovered((v) => !v)}
                    className="flex items-center gap-2 text-metadata text-(--foreground) hover:text-(--muted-light) transition-colors cursor-pointer py-1 px-2.5 rounded-sm"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18 }}
                    aria-label="Buka menu navigasi"
                  >
                    <span aria-hidden="true" className="w-1.5 h-1.5 bg-(--foreground)" />
                    <span className="font-medium tracking-[0.2em]">{activeLink.label}</span>
                    <span className="text-[9px] text-(--muted) opacity-60">▾</span>
                  </motion.button>
                ) : (
                  <motion.ul
                    key="expanded"
                    className="flex flex-col gap-1 py-0.5"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18, ease: ease.expo }}
                  >
                    {navLinks.map((link) => {
                      const isActive =
                        link.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(link.href);
                      return (
                        <li key={link.href} className="flex items-center gap-2">
                          <span
                            aria-hidden="true"
                            className={`w-1.5 h-1.5 bg-(--foreground) transition-opacity ${
                              isActive ? "opacity-100" : "opacity-0"
                            }`}
                          />
                          <Link
                            href={link.href}
                            aria-current={isActive ? "page" : undefined}
                            className={`text-metadata tracking-[0.2em] transition-colors hover:text-(--foreground) py-0.5 ${
                              isActive ? "text-(--foreground) font-medium" : "text-(--muted)"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Right: [2026] and CV on the same line (setara) */}
            <div className="flex items-center gap-3.5 justify-self-end py-1">
              <span className="text-metadata text-(--foreground) tracking-[0.15em]">
                [{siteConfig.year}]
              </span>
              <span className="text-(--border) text-xs" aria-hidden="true">·</span>
              <a
                href="/CVAdit.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-metadata pointer-events-auto text-(--muted-light) hover:text-(--foreground) transition-colors link-underline tracking-[0.15em]"
                aria-label="Lihat CV Fransisco Aditya Widiyanto"
              >
                CV ↗
              </a>
            </div>
          </div>

          {/* Mobile Flex Layout */}
          <div className="flex md:hidden items-center justify-between">
            <Link
              href="/"
              className="flex flex-col leading-none"
              aria-label="Adit — Beranda"
            >
              <span className="text-metadata font-body font-medium tracking-[0.3em]">
                ADIT
              </span>
            </Link>

            <button
              className="text-metadata text-(--muted) hover:text-(--foreground) transition-colors p-2 -mr-2 cursor-pointer"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            >
              {menuOpen ? "TUTUP" : "MENU"}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            style={{ zIndex: 999 }}
            className="fixed inset-0 bg-(--background) flex flex-col justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0, 1] }}
          >
            <nav className="container-editorial" aria-label="Navigasi Mobile">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.06,
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`text-display-lg block py-3 border-b border-(--border) transition-colors ${
                        pathname === link.href
                          ? "text-(--foreground)"
                          : "text-(--muted) hover:text-(--foreground)"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 flex flex-wrap gap-6 items-center">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-metadata text-(--muted) hover:text-(--foreground) transition-colors"
                >
                  EMAIL
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-metadata text-(--muted) hover:text-(--foreground) transition-colors"
                >
                  GITHUB
                </a>
                <a
                  href="/CVAdit.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-metadata text-(--muted) hover:text-(--foreground) transition-colors"
                >
                  LIHAT CV ↗
                </a>
                <a
                  href="/api/download-cv"
                  className="text-metadata text-[#c7a974] hover:text-(--foreground) transition-colors border border-[#c7a974]/40 px-3 py-1"
                >
                  UNDUH CV ↓
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
