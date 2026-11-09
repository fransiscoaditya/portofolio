"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";
import { projects, type Project, type ProjectType } from "@/content/projects";
import { javanese } from "@/content/javanese";
import { SectionLabel } from "@/components/motion/SectionLabel";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ease } from "@/lib/motion";

type FilterType = "ALL" | ProjectType;

const FILTERS: { key: FilterType; label: string }[] = [
  { key: "ALL", label: "ALL" },
  { key: "WEB", label: "WEB" },
  { key: "MOBILE", label: "MOBILE" },
  { key: "SYSTEM", label: "SYSTEM" },
  { key: "GAME", label: "GAME" },
];

export function WorkSection({ showHeader = true }: { showHeader?: boolean }) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");

  const filtered = activeFilter === "ALL"
    ? projects.filter((p) => p.featured)
    : projects.filter((p) => p.type === activeFilter && p.featured);

  return (
    <section
      id="work"
      className="section-y"
      aria-labelledby="work-heading"
    >
      <div className="container-editorial">
        {showHeader && (
          <>
          <div className="flex items-end justify-between mb-8 md:mb-12 pb-4 border-b border-(--border)">
          <div>
            <SectionLabel
              latin="SELECTED WORK"
              javanese={javanese.work}
              className="mb-2 h-5"
            />
            <h2
              id="work-heading"
              className="text-display-lg font-display font-light"
            >
              Work
            </h2>
          </div>
          <Link
            href="/work"
            className="text-metadata text-(--muted) hover:text-(--foreground) transition-colors hidden md:block"
          >
            ALL PROJECTS →
          </Link>
        </div>
          </>
        )}

        {/* Filter bar */}
        <div className="flex items-center gap-6 mb-12 md:mb-16" role="tablist" aria-label="Filter project">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={activeFilter === f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`text-metadata tracking-[0.2em] pb-1 transition-colors relative ${
                activeFilter === f.key
                  ? "text-(--foreground)"
                  : "text-(--muted) hover:text-(--foreground)"
              }`}
            >
              {f.label}
              {activeFilter === f.key && (
                <motion.span
                  layoutId="filter-indicator"
                  className="absolute left-0 right-0 -bottom-0 h-[1px] bg-(--foreground)"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
          <span className="text-metadata text-(--muted) ml-auto opacity-50">
            {filtered.length} PROJECT{filtered.length !== 1 ? "S" : ""}
          </span>
        </div>

        {/* Project list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: ease.out }}
          >
            <ProjectList projects={filtered} />
          </motion.div>
        </AnimatePresence>

        {/* Mobile: see all */}
        <div className="mt-12 md:hidden">
          <Link
            href="/work"
            className="text-metadata text-(--muted) hover:text-(--foreground) transition-colors"
          >
            ALL PROJECTS →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectList({ projects }: { projects: Project[] }) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 200, damping: 25 });
  const springY = useSpring(cursorY, { stiffness: 200, damping: 25 });
  const containerRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      cursorX.set(e.clientX - rect.left);
      cursorY.set(e.clientY - rect.top);
    },
    [cursorX, cursorY]
  );

  const hoveredProject = projects.find((p) => p.slug === hoveredSlug);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseMove={onMouseMove}
      onMouseLeave={() => setHoveredSlug(null)}
    >
      {/* Hover preview image */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            className="pointer-events-none absolute z-(--z-above) hidden md:block"
            style={{ x: springX, y: springY }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.2, ease: ease.out }}
          >
            <div
              className="relative overflow-hidden"
              style={{ width: 340, height: 240, transform: "translate(-50%, -130%)" }}
            >
              {hoveredProject.thumbnail ? (
                <Image
                  src={hoveredProject.thumbnail}
                  alt={hoveredProject.title}
                  fill
                  className="object-cover"
                  sizes="340px"
                />
              ) : (
                <div className="w-full h-full bg-(--surface) flex items-center justify-center">
                  <span className="text-metadata text-(--muted)">
                    {hoveredProject.shortTitle ?? hoveredProject.title}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project items */}
      <Stagger staggerChildren={0.08}>
        {projects.map((project, i) => (
          <StaggerItem key={project.slug}>
            <ProjectItem
              project={project}
              index={i + 1}
              isHovered={hoveredSlug === project.slug}
              onMouseEnter={() => setHoveredSlug(project.slug)}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

interface ProjectItemProps {
  project: Project;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
}

function ProjectItem({
  project,
  index,
  isHovered,
  onMouseEnter,
}: ProjectItemProps) {
  const indexStr = String(index).padStart(2, "0");

  const statusColor =
    project.status === "LIVE"
      ? "text-[#c7a974]"
      : project.status === "IN DEVELOPMENT"
      ? "text-(--muted)"
      : "text-(--muted)";

  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="view"
      onMouseEnter={onMouseEnter}
      className="group block border-b border-(--border) py-10 md:py-14 relative overflow-hidden"
      aria-label={`${project.title} — ${project.category} — ${project.year}`}
    >
      <div className="relative z-10">
        {/* Row 1: Index + Title + Year */}
        <div className="flex items-baseline gap-4 md:gap-8 mb-3">
          <motion.span
            className="text-metadata text-(--muted) shrink-0 w-7"
            animate={{ opacity: isHovered ? 1 : 0.4 }}
            transition={{ duration: 0.2 }}
          >
            {indexStr}
          </motion.span>

          <motion.h3
            className="text-display-lg font-display font-light leading-none flex-1"
            animate={{ x: isHovered ? 12 : 0, opacity: isHovered ? 1 : 0.85 }}
            transition={{ duration: 0.4, ease: ease.expo }}
          >
            {project.title}
          </motion.h3>

          <span className="text-metadata text-(--muted) shrink-0 hidden md:block">{project.year}</span>
        </div>

        {/* Row 2: Short description */}
        {project.shortDescription && (
          <div className="pl-11 md:pl-15 mb-5">
            <p className="text-body-sm text-(--muted) max-w-xl">
              {project.shortDescription}
            </p>
          </div>
        )}

        {/* Mobile thumbnail (desktop uses cursor-follow preview) */}
        {project.thumbnail && (
          <div className="md:hidden relative aspect-[16/10] w-full mb-6 overflow-hidden border border-(--border)">
            <Image
              src={project.thumbnail}
              alt={`Tampilan ${project.title}`}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}

        {/* Row 3: Metadata grid */}
        <div className="pl-11 md:pl-15 grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Role */}
          <div>
            <span className="text-[10px] tracking-[0.2em] text-(--muted) block mb-1">ROLE</span>
            <div className="flex flex-col gap-0.5">
              {project.role.map((r) => (
                <span key={r} className="text-metadata text-(--foreground) opacity-70">{r}</span>
              ))}
            </div>
          </div>

          {/* Type */}
          <div>
            <span className="text-[10px] tracking-[0.2em] text-(--muted) block mb-1">TYPE</span>
            <span className="text-metadata text-(--foreground) opacity-70">{project.category}</span>
          </div>

          {/* Stack */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-[10px] tracking-[0.2em] text-(--muted) block mb-1">STACK</span>
            <span className="text-metadata text-(--foreground) opacity-70">
              {project.technologies.slice(0, 3).join(" · ")}
              {project.technologies.length > 3 ? " ···" : ""}
            </span>
          </div>

          {/* Status + CTA */}
          <div className="flex flex-col items-start md:items-end gap-1">
            <span className={`text-[10px] tracking-[0.2em] ${statusColor}`}>
              ● {project.status}
            </span>
            <span className="text-metadata text-(--muted) group-hover:text-(--foreground) transition-colors mt-1">
              VIEW →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
