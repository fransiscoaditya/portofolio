import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";
import { javanese } from "@/content/javanese";
import { formatIndex } from "@/lib/utils";
import { Footer } from "@/components/footer/Footer";
import { SectionLabel } from "@/components/motion/SectionLabel";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects by Aditya — warehouse management, collaboration platforms, and more.",
};

export default function WorkPage() {
  return (
    <>
      <div className="pt-32 pb-0">
        <div className="container-editorial">
          {/* Header */}
          <div className="border-b border-[--border] pb-4 mb-12 md:mb-20">
            <SectionLabel
              latin="ALL PROJECTS"
              javanese={javanese.work}
              className="mb-2 h-5"
            />
            <h1 className="text-display-xl font-display font-light">Work</h1>
          </div>

          {/* All projects list */}
          <Stagger staggerChildren={0.08} className="mb-20">
            {projects.map((project, i) => (
              <StaggerItem key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  data-cursor="view"
                  className="group block border-b border-[--border] py-8 md:py-12 relative overflow-hidden"
                  aria-label={`${project.title} — ${project.category} — ${project.year}`}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between gap-4 md:gap-8 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 flex-1">
                      {/* Index */}
                      <span className="text-metadata text-[--muted] shrink-0 w-8 opacity-50 group-hover:opacity-100 transition-opacity">
                        {formatIndex(i + 1)}
                      </span>
            
                      {/* Title */}
                      <h2 className="text-display-lg font-display font-light leading-none opacity-80 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-300">
                        {project.title}
                      </h2>
                    </div>
            
                    {/* Meta */}
                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto shrink-0 gap-4 mt-4 md:mt-0">
                      <span className="text-metadata text-[--muted]">{project.category}</span>
                      <span className="text-metadata text-[--muted]">{project.year}</span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
      <Footer />
    </>
  );
}
