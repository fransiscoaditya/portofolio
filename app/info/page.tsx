import type { Metadata } from "next";
import { PageHero } from "@/components/hero/PageHero";
import {
  ExperienceSection,
  EducationSection,
  BooksSection,
  ExpertiseSection,
  TechSection,
  CurrentlySection,
} from "@/components/info/InfoSection";
import { Footer } from "@/components/footer/Footer";
import { javanese } from "@/content/javanese";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Info",
  description: siteConfig.description,
};

export default function InfoPage() {
  return (
    <>
      <PageHero
        word="INFO"
        accent={javanese.syllables.aditya}
        video="/images/Anime.mp4"
        meta="[PENGALAMAN · PENDIDIKAN · BUKU]"
        metaRight={`[${siteConfig.year}]`}
      />
      <ExperienceSection />
      <EducationSection />
      <BooksSection />
      <ExpertiseSection />
      <TechSection />
      <CurrentlySection />
      <Footer />
    </>
  );
}
