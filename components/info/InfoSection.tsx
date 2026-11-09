import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/motion/SectionLabel";
import { javanese } from "@/content/javanese";
import { siteConfig } from "@/content/site";
import { skillCategories } from "@/content/skills";
import { experiences, organizations, education, books } from "@/content/experience";

// ── IdentitySection ─────────────────────────────────────────────────────────
export function IdentitySection() {
  return (
    <section
      id="identity"
      className="section-y"
      aria-labelledby="identity-heading"
    >
      <div className="container-editorial">
        <div className="editorial-grid items-center">
          {/* Photo */}
          <div className="col-span-4 md:col-span-4 md:col-start-1">
            <Reveal>
              <div className="relative aspect-[3/4] overflow-hidden bg-(--surface) border border-(--border)">
                <Image
                  src="/images/PhotoAdit.png"
                  alt="Fransisco Aditya Widiyanto"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
            </Reveal>
          </div>

          {/* Right: metadata */}
          <div className="col-span-4 md:col-span-6 md:col-start-7 mt-12 md:mt-0">
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-8">
                <div>
                  <span className="text-metadata text-(--muted) block mb-2">NAMA LENGKAP</span>
                  <span className="text-display-sm font-display font-light text-(--foreground)">{siteConfig.fullName}</span>
                </div>
                <div>
                  <span className="text-metadata text-(--muted) block mb-2">BERBASIS DI</span>
                  <span className="text-body-md">{siteConfig.location}</span>
                </div>
                <div>
                  <span className="text-metadata text-(--muted) block mb-2">TERSEDIA UNTUK</span>
                  <span className="text-body-md text-[#c7a974]">{siteConfig.availability.join(", ")} Opportunities</span>
                </div>
                <div>
                  <span className="text-metadata text-(--muted) block mb-2">PENDIDIKAN</span>
                  <span className="text-body-md">S1 Sistem Informasi — UNIKA Soegijapranata (IPK 3.82)</span>
                </div>
                <div>
                  <span className="text-metadata text-(--muted) block mb-2">PENDEKATAN</span>
                  <span className="text-body-md">Rekayasa Perangkat Lunak</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── ExpertiseSection — 4 Clusters ───────────────────────────────────────────
const expertiseClusters = [
  {
    label: "WEB DEVELOPMENT",
    items: ["React & Next.js", "TypeScript & JavaScript", "Full-Stack Web Apps", "Performance Optimization"],
  },
  {
    label: "MOBILE DEVELOPMENT",
    items: ["Flutter (Dart)", "Android (Kotlin)", "Cross-Platform Apps", "ML On-Device Integration"],
  },
  {
    label: "BACKEND & PLATFORM",
    items: ["Laravel & PHP", "Node.js & Express", "RESTful API Design", "Authentication & Security"],
  },
  {
    label: "DATABASE & TOOLS",
    items: ["PostgreSQL & MySQL", "Supabase & Firebase", "Git & GitHub", "System Architecture"],
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-y" aria-labelledby="expertise-heading">
      <div className="container-editorial">
        <div className="border-b border-(--border) pb-4 mb-12">
          <SectionLabel
            latin="KEAHLIAN"
            javanese={javanese.technology}
            className="mb-2 h-5"
          />
          <h2 id="expertise-heading" className="text-display-lg font-display font-light">
            Fokus
          </h2>
        </div>

        <Stagger staggerChildren={0.07} className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {expertiseClusters.map((cluster) => (
            <StaggerItem key={cluster.label}>
              <div>
                <span className="text-[10px] tracking-[0.25em] text-(--muted) block mb-4">
                  {cluster.label}
                </span>
                <div className="flex flex-col gap-2">
                  {cluster.items.map((item) => (
                    <span
                      key={item}
                      className="text-heading-lg font-display font-light text-(--muted) hover:text-(--foreground) transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

// ── TechSection ──────────────────────────────────────────────────────────────
export function TechSection() {
  return (
    <section id="technology" className="section-y" aria-labelledby="tech-heading">
      <div className="container-editorial">
        <div className="border-b border-(--border) pb-4 mb-12">
          <SectionLabel
            latin="TEKNOLOGI"
            javanese={javanese.technology}
            className="mb-2 h-5"
          />
          <h2 id="tech-heading" className="text-display-lg font-display font-light">
            Stack
          </h2>
        </div>

        <Stagger staggerChildren={0.07} className="flex flex-col gap-10 md:gap-14">
          {skillCategories.map((cat) => (
            <StaggerItem key={cat.label}>
              <div className="grid grid-cols-4 md:grid-cols-12 gap-4">
                <div className="col-span-4 md:col-span-2">
                  <span className="text-metadata text-(--muted) tracking-[0.2em]">{cat.label}</span>
                </div>
                <div className="col-span-4 md:col-span-10 flex flex-wrap gap-x-6 gap-y-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-heading-lg text-(--muted) hover:text-(--foreground) transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

// ── BooksSection — 4 Buku Ber-HAKI ───────────────────────────────────────────
export function BooksSection() {
  return (
    <section id="publications" className="section-y border-t border-(--border)" aria-labelledby="books-heading">
      <div className="container-editorial">
        <div className="border-b border-(--border) pb-4 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <SectionLabel
              latin="PUBLIKASI & HAKI"
              javanese={javanese.about}
              className="mb-2 h-5"
            />
            <h2 id="books-heading" className="text-display-lg font-display font-light">
              Buku Ber-HAKI
            </h2>
          </div>
          <span className="text-metadata text-(--muted)">
            4 BUKU TERDAFTAR HAK CIPTA (GOOGLE BOOKS)
          </span>
        </div>

        <Stagger staggerChildren={0.08} className="flex flex-col gap-0">
          {books.map((book, i) => (
            <StaggerItem key={book.title}>
              <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-(--border) py-8 md:py-10 transition-colors hover:border-(--foreground)"
              >
                <div className="grid grid-cols-4 md:grid-cols-12 gap-4 items-baseline">
                  {/* Index + Year */}
                  <div className="col-span-4 md:col-span-2 flex items-baseline gap-4">
                    <span className="text-metadata text-(--muted) group-hover:text-(--foreground) transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-metadata text-(--muted) font-body">{book.year}</span>
                  </div>

                  {/* Title & Description */}
                  <div className="col-span-4 md:col-span-8">
                    <h3 className="text-heading-lg text-(--foreground) group-hover:text-[#c7a974] transition-colors mb-2">
                      {book.title}
                    </h3>
                    <p className="text-body-sm text-(--muted)">{book.description}</p>
                  </div>

                  {/* Badge & Link */}
                  <div className="col-span-4 md:col-span-2 flex md:justify-end items-center gap-2 pt-2 md:pt-0">
                    <span className="text-[10px] tracking-[0.15em] text-[#c7a974] border border-[#c7a974]/30 px-2 py-0.5 uppercase">
                      {book.haki}
                    </span>
                    <span className="text-metadata text-(--muted) group-hover:text-(--foreground) transition-colors hidden md:inline">
                      LIHAT ↗
                    </span>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

// ── ExperienceSection ─────────────────────────────────────────────────────────
export function ExperienceSection() {
  return (
    <section id="experience" className="section-y border-t border-(--border)" aria-labelledby="exp-heading">
      <div className="container-editorial">
        <div className="border-b border-(--border) pb-4 mb-12">
          <SectionLabel
            latin="PENGALAMAN & PROYEK"
            javanese={javanese.about}
            className="mb-2 h-5"
          />
          <h2 id="exp-heading" className="text-display-lg font-display font-light">
            Experience
          </h2>
        </div>

        <Stagger staggerChildren={0.08} className="flex flex-col gap-0">
          {experiences.map((exp) => (
            <StaggerItem key={exp.title + exp.period}>
              <div className="grid grid-cols-4 md:grid-cols-12 gap-4 border-b border-(--border) py-8 md:py-10">
                {/* Period */}
                <div className="col-span-4 md:col-span-3">
                  <span className="text-metadata text-(--muted) block mb-1">{exp.period}</span>
                  <span className="text-[10px] tracking-[0.15em] text-(--muted) border border-(--border) px-2 py-0.5 uppercase inline-block">
                    {exp.type}
                  </span>
                </div>

                {/* Content */}
                <div className="col-span-4 md:col-span-9">
                  <h3 className="text-heading-lg text-(--foreground) mb-1">{exp.title}</h3>
                  <p className="text-body-sm text-[#c7a974] mb-3">{exp.organization}</p>
                  
                  <ul className="flex flex-col gap-1.5 list-disc list-inside text-body-sm text-(--muted)">
                    {exp.responsibilities.map((resp) => (
                      <li key={resp} className="leading-relaxed">
                        <span className="text-(--muted-light)">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Organisasi Subsection */}
        <div className="mt-16 pt-8 border-t border-(--border)">
          <h3 className="text-metadata text-(--muted) tracking-[0.2em] mb-8">ORGANISASI KAMPUS</h3>
          <div className="flex flex-col gap-0">
            {organizations.map((org) => (
              <div key={org.organization} className="grid grid-cols-4 md:grid-cols-12 gap-4 py-6 border-b border-(--border)">
                <div className="col-span-4 md:col-span-3">
                  <span className="text-metadata text-(--muted)">{org.period}</span>
                </div>
                <div className="col-span-4 md:col-span-9">
                  <h4 className="text-heading-lg text-(--foreground) mb-1">{org.role}</h4>
                  <p className="text-body-sm text-[#c7a974] mb-2">{org.organization}</p>
                  <p className="text-body-sm text-(--muted)">{org.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── EducationSection ──────────────────────────────────────────────────────────
export function EducationSection() {
  return (
    <section id="education" className="section-y border-t border-(--border)" aria-labelledby="edu-heading">
      <div className="container-editorial">
        <div className="border-b border-(--border) pb-4 mb-12">
          <SectionLabel
            latin="PENDIDIKAN"
            javanese={javanese.about}
            className="mb-2 h-5"
          />
          <h2 id="edu-heading" className="text-display-lg font-display font-light">
            Education
          </h2>
        </div>

        <Stagger staggerChildren={0.1} className="flex flex-col gap-0">
          {education.map((edu) => (
            <StaggerItem key={edu.institution}>
              <div className="grid grid-cols-4 md:grid-cols-12 gap-4 border-b border-(--border) py-8">
                <div className="col-span-4 md:col-span-3">
                  <span className="text-metadata text-(--muted)">{edu.period}</span>
                </div>
                <div className="col-span-4 md:col-span-9">
                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <h3 className="text-heading-lg text-(--foreground)">{edu.institution}</h3>
                    <span className="text-metadata text-[#c7a974] border border-[#c7a974]/30 px-2 py-0.5">
                      {edu.gpa}
                    </span>
                  </div>
                  <p className="text-body-sm text-(--muted) mb-2">{edu.degree} — {edu.field}</p>
                  {edu.note && (
                    <p className="text-metadata text-(--muted) opacity-60">{edu.note}</p>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

// ── CurrentlySection ──────────────────────────────────────────────────────────
export function CurrentlySection() {
  const { currently } = siteConfig;
  return (
    <section id="currently" className="section-y border-t border-(--border)" aria-labelledby="currently-heading">
      <div className="container-editorial">
        <div className="border-b border-(--border) pb-4 mb-12">
          <SectionLabel
            latin="SAAT INI"
            javanese={javanese.work}
            className="mb-2 h-5"
          />
          <h2 id="currently-heading" className="text-display-lg font-display font-light">
            Currently
          </h2>
        </div>

        <Stagger staggerChildren={0.1} className="flex flex-col gap-8 md:gap-12">
          <StaggerItem>
            <div className="grid grid-cols-4 md:grid-cols-12 gap-4 items-baseline">
              <span className="col-span-4 md:col-span-2 text-metadata text-(--muted) tracking-[0.2em]">MEMBANGUN</span>
              <p className="col-span-4 md:col-span-10 text-heading-lg text-(--foreground)">{currently.building}</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="grid grid-cols-4 md:grid-cols-12 gap-4 items-baseline">
              <span className="col-span-4 md:col-span-2 text-metadata text-(--muted) tracking-[0.2em]">BELAJAR</span>
              <p className="col-span-4 md:col-span-10 text-heading-lg text-(--foreground)">{currently.learning}</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="grid grid-cols-4 md:grid-cols-12 gap-4 items-baseline">
              <span className="col-span-4 md:col-span-2 text-metadata text-(--muted) tracking-[0.2em]">MENJELAJAH</span>
              <p className="col-span-4 md:col-span-10 text-heading-lg text-(--foreground)">{currently.exploring}</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="grid grid-cols-4 md:grid-cols-12 gap-4 items-baseline">
              <span className="col-span-4 md:col-span-2 text-metadata text-(--muted) tracking-[0.2em]">MENCARI</span>
              <p className="col-span-4 md:col-span-10 text-heading-lg text-[#c7a974]">
                Software Engineering / Web &amp; Mobile Developer Opportunities (Full-Time)
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="grid grid-cols-4 md:grid-cols-12 gap-4 items-baseline">
              <span className="col-span-4 md:col-span-2 text-metadata text-(--muted) tracking-[0.2em]">TERSEDIA</span>
              <div className="col-span-4 md:col-span-10 flex flex-wrap gap-2">
                {siteConfig.availability.map((tag) => (
                  <span key={tag} className="text-heading-lg text-[#c7a974]">{tag}</span>
                ))}
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
