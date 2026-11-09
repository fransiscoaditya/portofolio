import type { Metadata } from "next";
import { PageHero } from "@/components/hero/PageHero";
import { WorkSection } from "@/components/work/WorkSection";
import { Footer } from "@/components/footer/Footer";
import { javanese } from "@/content/javanese";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Proyek terpilih Fransisco Aditya Widiyanto — web, mobile, dan sistem manajemen untuk klien nyata.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        word="WORK"
        accent={javanese.syllables.aditya}
        video="/images/Work.mp4"
        meta={`[${String(projects.length).padStart(2, "0")} PROJECTS]`}
        metaRight="[2024 — 2026]"
      />
      <WorkSection showHeader={false} />
      <Footer />
    </>
  );
}