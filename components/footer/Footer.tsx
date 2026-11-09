"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { siteConfig } from "@/content/site";

const socialLinks = [
  { label: "EMAIL", href: `mailto:${siteConfig.email}` },
  { label: "GITHUB ↗", href: siteConfig.github },
  { label: "LINKEDIN ↗", href: siteConfig.linkedin },
  { label: "INSTAGRAM ↗", href: siteConfig.instagram },
  { label: "TIKTOK ↗", href: siteConfig.tiktok },
].filter((l) => Boolean(l.href && !l.href.includes("undefined")));

export function Footer() {
  return (
    <footer
      className="section-y border-t border-(--border)"
      aria-label="Footer — Contact"
    >
      <div className="container-editorial">
        {/* Large CTA typography */}
        <div className="mb-16 md:mb-24">
          <Reveal>
            <h2 className="text-display-xl font-display font-light leading-none tracking-[-0.03em]">
              Siap
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display-xl font-display italic font-light leading-none tracking-[-0.03em] md:ml-[10%]">
              Berkontribusi.
            </h2>
          </Reveal>

          {/* Availability tagline */}
          <Reveal delay={0.1}>
            <p className="text-body-md text-(--muted) mt-8 max-w-lg">
              Terbuka untuk peluang kerja rekayasa perangkat lunak (Full-time).
              Siap membawa dedikasi, keterampilan teknis web &amp; mobile, serta kemampuan problem solving ke dalam tim perusahaan Anda.
              Berbasis di {siteConfig.location}.
            </p>
          </Reveal>

          {/* Primary CTA — Email & CV */}
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-metadata border border-(--foreground) px-6 py-3 hover:bg-(--foreground) hover:text-(--background) transition-colors inline-block"
              >
                KIRIM EMAIL ↗
              </a>
              <a
                href="/CVAdit.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-metadata border border-(--border) px-6 py-3 text-(--muted) hover:border-(--foreground) hover:text-(--foreground) transition-colors inline-block"
              >
                LIHAT CV ↗
              </a>
              <a
                href="/api/download-cv"
                className="text-metadata bg-(--foreground) text-(--background) border border-(--foreground) px-6 py-3 hover:bg-transparent hover:text-(--foreground) transition-colors inline-block font-medium"
              >
                UNDUH CV ↓
              </a>
            </div>
          </Reveal>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pt-8 border-t border-(--border)">
          {/* Social links */}
          <nav aria-label="Tautan Sosial">
            <ul className="flex flex-wrap gap-4 md:gap-8">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Magnetic>
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="text-metadata text-(--muted) hover:text-(--foreground) transition-colors"
                    >
                      {link.label}
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: back to top + metadata */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-metadata text-(--muted) hover:text-(--foreground) transition-colors"
              aria-label="Kembali ke atas"
            >
              ↑ ATAS
            </button>
            <span className="text-metadata text-(--muted)">
              © {siteConfig.year} {siteConfig.fullName}
            </span>
            <span className="text-[10px] text-(--muted) opacity-50 tracking-[0.15em]">
              Didesain &amp; dibangun oleh Aditya Widiyanto · Next.js · TypeScript · Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
