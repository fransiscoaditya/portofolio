import { siteConfig } from "@/content/site";
import { javanese } from "@/content/javanese";
import { PageHero } from "@/components/hero/PageHero";

export function Hero() {
  return (
    <div className="bg-[#0a0a0a]">
      {/* SECTION 1: Massive initials — shared opener */}
      <PageHero
        word="ADIT"
        accent={javanese.syllables.aditya}
        video="/images/Tech.mp4"
        meta="[SENANG BERTEMU DENGANMU]"
        metaRight="ꦱꦸꦒꦼꦁꦫꦮꦸꦃ"
      />

      {/* SECTION 2: Professional Positioning — HR Layer */}
      <section className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-20 py-24 z-20">
        <div className="max-w-5xl">
          {/* Layer 1: HR — Name + Role */}
          <div className="mb-6">
            <p className="text-metadata text-(--muted) tracking-[0.25em] mb-3">
              {siteConfig.fullName.toUpperCase()}
            </p>
          </div>
          <h2 className="text-display-lg md:text-[8vw] font-display text-(--foreground) leading-[0.85]">
            WEB &amp; MOBILE
          </h2>
          <h2 className="text-display-lg md:text-[8vw] font-display text-(--foreground) leading-[0.85] mt-1">
            DEVELOPER
          </h2>
          <h2 className="text-display-lg md:text-[8vw] font-display text-(--foreground) leading-[0.85] mt-1">
            <span className="font-accent italic text-[#c7a974] normal-case tracking-normal text-[6vw] md:text-[5vw]">&amp;</span>{" "}
            SOFTWARE DEVELOPER
          </h2>

          {/* Layer 2: Positioning Statement */}
          <div className="mt-10 md:mt-14 max-w-2xl">
            <p className="text-body-lg text-(--muted-light)">
              {siteConfig.shortBio}
            </p>
          </div>

          {/* Availability Tags */}
          <div className="mt-8 flex flex-wrap gap-3">
            {siteConfig.availability.map((tag) => (
              <span
                key={tag}
                className="text-metadata border border-(--border) px-3 py-1 text-(--muted) tracking-[0.15em]"
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
      <section className="relative min-h-[50vh] flex flex-col justify-center px-6 md:px-20 py-24 border-t border-(--border)">
        <div className="max-w-xl">
          <p className="text-metadata text-(--muted) uppercase tracking-[0.2em] mb-4">
            WEB &amp; MOBILE DEVELOPER · KOTA SEMARANG, INDONESIA
          </p>
          <p className="text-body-md font-body text-(--muted-light) mt-4">
            Fokus pada rekayasa perangkat lunak, pengembangan aplikasi web modern, mobile apps (Flutter / Kotlin), serta integrasi sistem dan database yang andal.
          </p>
          <p className="text-body-md font-body text-(--muted-light) mt-4">
            Mahasiswa Sistem Informasi UNIKA Soegijapranata (IPK 3.82). Alumni Bangkit Academy 2024. Penulis 4 buku ber-HAKI di bidang teknologi.
          </p>
        </div>
      </section>
    </div>
  );
}
