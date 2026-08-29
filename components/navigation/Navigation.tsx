"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/content/site";

const navLinks = [
  { href: "/", label: "BERANDA" },
  { href: "/work", label: "KARYA" },
  { href: "/info", label: "TENTANG" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
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
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        style={{ zIndex: 1000 }}
        className={`fixed top-0 left-0 right-0 transition-all duration-300 pointer-events-auto ${
          scrolled ? "bg-[--background]/95 backdrop-blur-md border-b border-[--border]" : "bg-transparent"
        }`}
      >
        <nav
          className="container-editorial py-5"
          aria-label="Navigasi Utama"
        >
          {/* Desktop Layout: Brand Left, Menu + CV Right */}
          <div className="hidden md:flex justify-between items-center w-full">
            {/* Left: Logo */}
            <Link
              href="/"
              className="group flex flex-col leading-none pointer-events-auto"
              aria-label="Aditya — Beranda"
            >
              <span className="text-metadata font-body font-medium tracking-[0.3em] text-[--foreground] hover:text-[--muted-light] transition-colors">
                {siteConfig.name.toUpperCase()}
              </span>
            </Link>

            {/* Right: Navigation Links + CV Button */}
            <div className="flex items-center gap-8" role="menubar">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    className="relative text-metadata py-1 transition-colors hover:text-[--foreground] group pointer-events-auto"
                  >
                    <span className={isActive ? "text-[--foreground] font-medium" : "text-[--muted]"}>
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute left-0 right-0 -bottom-1 h-[1px] bg-[--foreground]"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}

              {/* CV Button */}
              <a
                href="/CVAdit.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-metadata text-[--foreground] hover:bg-[--foreground] hover:text-[--background] transition-all border border-[--border] hover:border-[--foreground] px-3.5 py-1.5 pointer-events-auto"
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
              aria-label="Aditya — Beranda"
            >
              <span className="text-metadata font-body font-medium tracking-[0.3em]">
                {siteConfig.name.toUpperCase()}
              </span>
            </Link>

            <button
              className="text-metadata text-[--muted] hover:text-[--foreground] transition-colors p-2 -mr-2 cursor-pointer"
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
            className="fixed inset-0 bg-[--background] flex flex-col justify-center"
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
                      className={`text-display-lg block py-3 border-b border-[--border] transition-colors ${
                        pathname === link.href
                          ? "text-[--foreground]"
                          : "text-[--muted] hover:text-[--foreground]"
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
                  className="text-metadata text-[--muted] hover:text-[--foreground] transition-colors"
                >
                  EMAIL
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-metadata text-[--muted] hover:text-[--foreground] transition-colors"
                >
                  GITHUB
                </a>
                <a
                  href="/CVAdit.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-metadata text-[--muted] hover:text-[--foreground] transition-colors"
                >
                  LIHAT CV ↗
                </a>
                <a
                  href="/api/download-cv"
                  className="text-metadata text-[#c7a974] hover:text-[--foreground] transition-colors border border-[#c7a974]/40 px-3 py-1"
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
