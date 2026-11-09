import { technologies } from "@/content/skills";

/** Infinite tech ticker — outlined display type, pauses on hover. */
export function TechMarquee() {
  const row = [...technologies, ...technologies];

  return (
    <section
      aria-label="Teknologi yang saya gunakan"
      className="border-y border-(--border) py-6 md:py-10 overflow-hidden select-none"
    >
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((dup) => (
          <ul key={dup} className="flex shrink-0 items-center">
            {row.slice(0, technologies.length).map((tech) => (
              <li
                key={`${dup}-${tech}`}
                className="flex items-center font-display text-[10vw] md:text-[6vw] leading-none text-outline hover:text-(--foreground) transition-colors"
              >
                <span className="px-6 md:px-10">{tech}</span>
                <span className="text-[#c7a974] text-[3vw] md:text-[1.5vw]">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <p className="sr-only">{technologies.join(", ")}</p>
    </section>
  );
}

