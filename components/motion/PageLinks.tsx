import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

const links = [
  { href: "/work", label: "WORK", note: "Proyek terpilih", index: "01" },
  { href: "/info", label: "INFO", note: "Pengalaman, pendidikan & buku", index: "02" },
];

/** Large editorial links that replace the long single-page scroll. */
export function PageLinks() {
  return (
    <section className="section-y" aria-label="Jelajahi">
      <div className="container-editorial">
        <ul className="border-t border-(--border)">
          {links.map((l, i) => (
            <li key={l.href}>
              <Reveal delay={i * 0.08}>
                <Link
                  href={l.href}
                  data-cursor="view"
                  className="group flex items-baseline justify-between gap-6 border-b border-(--border) py-8 md:py-12"
                >
                  <span className="flex items-baseline gap-4 md:gap-8">
                    <span className="text-metadata">{l.index}</span>
                    <span className="font-display text-[12vw] md:text-[8vw] leading-none text-(--foreground) transition-transform duration-500 group-hover:translate-x-4">
                      {l.label}
                    </span>
                  </span>
                  <span className="hidden sm:flex flex-col items-end gap-1">
                    <span className="text-metadata">{l.note}</span>
                    <span className="text-metadata text-[#c7a974]">LIHAT →</span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

