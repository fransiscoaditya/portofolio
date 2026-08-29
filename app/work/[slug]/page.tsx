import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, getAdjacentProjects, projects } from "@/content/projects";
import { Footer } from "@/components/footer/Footer";
import { Reveal } from "@/components/motion/Reveal";

interface Params {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      <article className="pt-24">
        {/* Hero image — View Transition target */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            height: "clamp(300px, 55vw, 700px)",
            viewTransitionName: `project-image-${slug}`,
          } as React.CSSProperties}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          ) : (
            <div className="w-full h-full bg-[--surface] flex items-center justify-center">
              <span className="text-display-md font-display font-light text-[--muted]">
                {project.shortTitle ?? project.title}
              </span>
            </div>
          )}
        </div>

        {/* Project header */}
        <div className="container-editorial py-12 md:py-16">
          <div className="editorial-grid">
            <div className="col-span-4 md:col-span-8">
              <Reveal>
                <p className="text-metadata text-[--muted] mb-3">
                  {project.category}
                </p>
                <h1 className="text-display-xl font-display font-light leading-tight">
                  {project.title}
                </h1>
              </Reveal>
            </div>

            {/* Metadata sidebar */}
              <div className="col-span-4 md:col-span-3 md:col-start-10">
              <Reveal delay={0.1}>
                <div className="flex flex-col gap-6 mt-4 md:mt-12">
                  <div>
                    <span className="text-metadata text-[--muted] block mb-1">TAHUN</span>
                    <span className="text-body-md">{project.year}</span>
                  </div>
                  <div>
                    <span className="text-metadata text-[--muted] block mb-1">PERAN</span>
                    <div className="flex flex-col gap-0.5">
                      {project.role.map((r) => (
                        <span key={r} className="text-body-md">{r}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-metadata text-[--muted] block mb-1">TEKNOLOGI</span>
                    <div className="flex flex-col gap-0.5">
                      {project.technologies.map((t) => (
                        <span key={t} className="text-body-md text-[--muted]">{t}</span>
                      ))}
                    </div>
                  </div>
                  {/* Live Demo button */}
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-metadata border border-[--foreground] px-4 py-2 hover:bg-[--foreground] hover:text-[--background] transition-colors inline-block text-center"
                    >
                      LIVE DEMO ↗
                    </a>
                  )}
                  {/* GitHub or Private indicator */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-metadata border border-[--border] px-4 py-2 hover:border-[--foreground] transition-colors inline-block text-center text-[--muted] hover:text-[--foreground]"
                    >
                      GITHUB ↗
                    </a>
                  ) : project.isPrivate ? (
                    <span className="text-metadata text-[--muted] border border-[--border] px-4 py-2 inline-block text-center">
                      🔒 SOURCE CODE KONFIDENSIAL
                    </span>
                  ) : null}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Overview */}
          <div className="mt-16 md:mt-24 border-t border-[--border] pt-12">
            <div className="editorial-grid">
              <div className="col-span-4 md:col-span-7 md:col-start-2">
                <Reveal>
                  <h2 className="text-heading-lg text-[--muted] mb-6">RINGKASAN</h2>
                  <p className="text-body-lg text-[--muted]">{project.description}</p>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Impact / Outcome — HR-facing */}
          {project.impact && (
            <div className="mt-16 md:mt-20 border-t border-[--border] pt-12">
              <div className="editorial-grid">
                <div className="col-span-4 md:col-span-7 md:col-start-2">
                  <Reveal>
                    <h2 className="text-heading-lg text-[--muted] mb-4">DAMPAK</h2>
                    <p className="text-body-lg text-[--foreground]">{project.impact}</p>
                  </Reveal>
                </div>
              </div>
            </div>
          )}

          {/* Challenge / Approach / Result */}
          {(project.challenge || project.approach || project.result) && (
            <div className="mt-16 md:mt-20 border-t border-[--border] pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {project.challenge && (
                  <Reveal>
                    <h2 className="text-heading-lg text-[--muted] mb-4">TANTANGAN</h2>
                    <p className="text-body-md text-[--muted]">{project.challenge}</p>
                  </Reveal>
                )}
                {project.approach && (
                  <Reveal delay={0.07}>
                    <h2 className="text-heading-lg text-[--muted] mb-4">PENDEKATAN</h2>
                    <p className="text-body-md text-[--muted]">{project.approach}</p>
                  </Reveal>
                )}
                {project.result && (
                  <Reveal delay={0.14}>
                    <h2 className="text-heading-lg text-[--muted] mb-4">HASIL</h2>
                    <p className="text-body-md text-[--muted]">{project.result}</p>
                  </Reveal>
                )}
              </div>
            </div>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-16 md:mt-24 border-t border-[--border] pt-12">
              <h2 className="text-heading-lg text-[--muted] mb-8">GALERI</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <div className="relative overflow-hidden aspect-video bg-[--surface] flex items-center justify-center">
                      <Image
                        src={img}
                        alt={`${project.title} — image ${i + 1}`}
                        fill
                        loading="lazy"
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Next / Prev navigation */}
        <div className="border-t border-[--border]">
          <div className="container-editorial grid grid-cols-2">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group py-8 pr-8 border-r border-[--border]"
                aria-label={`Proyek sebelumnya: ${prev.title}`}
              >
                <span className="text-metadata text-[--muted] block mb-2">← SEBELUMNYA</span>
                <span className="text-display-md font-display font-light group-hover:translate-x-(-1) transition-transform">
                  {prev.shortTitle ?? prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group py-8 pl-8 text-right col-start-2"
                aria-label={`Proyek selanjutnya: ${next.title}`}
              >
                <span className="text-metadata text-[--muted] block mb-2">SELANJUTNYA →</span>
                <span className="text-display-md font-display font-light">
                  {next.shortTitle ?? next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
